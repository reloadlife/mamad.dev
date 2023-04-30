package services

import (
	`bytes`
	`fmt`
	`io/ioutil`
	`runtime`
	
	"github.com/sarulabs/di"
	log `github.com/sirupsen/logrus`
)

var (
	dunno     = []byte("???")
	centerDot = []byte("·")
	dot       = []byte(".")
	slash     = []byte("/")
)

func source(lines [][]byte, n int) []byte {
	n--
	if n < 0 || n >= len(lines) {
		return dunno
	}
	return bytes.TrimSpace(lines[n])
}

func function(pc uintptr) []byte {
	fn := runtime.FuncForPC(pc)
	if fn == nil {
		return dunno
	}
	name := []byte(fn.Name())
	if lastSlash := bytes.LastIndex(name, slash); lastSlash >= 0 {
		name = name[lastSlash+1:]
	}
	if period := bytes.Index(name, dot); period >= 0 {
		name = name[period+1:]
	}
	name = bytes.Replace(name, centerDot, dot, -1)
	return name
}

func stack(skip int) []byte {
	buf := new(bytes.Buffer)
	var lines [][]byte
	var lastFile string
	for i := skip; ; i++ {
		pc, file, line, ok := runtime.Caller(i)
		if !ok {
			break
		}
		_, _ = fmt.Fprintf(buf, "%s:%d (0x%x)\n", file, line, pc)
		if file != lastFile {
			data, err := ioutil.ReadFile(file)
			if err != nil {
				continue
			}
			lines = bytes.Split(data, []byte{'\n'})
			lastFile = file
		}
		_, _ = fmt.Fprintf(buf, "\t%s: %s\n", function(pc), source(lines, line))
	}
	return buf.Bytes()
}

func TraceStack(skip int) {
	if skip < 3 {
		skip = 3
	}
	log.Tracef("%s", stack(skip))
}

var Container di.Container

func SetupServices(services ...*di.Def) {
	builder, _ := di.NewBuilder()
	
	for _, service := range services {
		err := builder.Add(*service)
		log.Tracef("Registering service: %v", service.Name)
		if err != nil {
			log.Fatal("Failed to register service: ", service.Name, "")
		}
	}
	Container = builder.Build()
	for _, service := range services {
		_, err := Container.SafeGet(service.Name)
		log.Tracef("Loading service: %v", service.Name)
		if err != nil {
			TraceStack(0)
			log.Fatalf("Error Loading Service %v Failed, Err: %v: ", service.Name, err.Error())
		}
	}
	
	log.Infof("Loaded %v services", len(Container.Definitions()))
}

func GetService[T interface{}](name string) T {
	service, err := GetServiceSafe[T](name)
	if err != nil {
		log.Fatal("Failed to get service: ", name, "")
		return service
	}
	return service
}

func GetServiceSafe[T interface{}](name string) (T, error) {
	service, err := Container.SafeGet(name)
	return service.(T), err
}

func HasService(name string) bool {
	service, err := Container.SafeGet(name)
	return err == nil && service != nil
}

var (
	Beeorm = "orm"
	Gorm   = "gorm"
)
