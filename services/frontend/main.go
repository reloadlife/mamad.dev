package frontend

import (
	`embed`
	`fmt`
	`net/http`
	`net/http/httputil`
	`net/url`
	`os/exec`
	
	`github.com/gin-gonic/gin`
	`github.com/reloadlife/mamad.dev/v2/services/config`
	`github.com/sarulabs/di`
	log `github.com/sirupsen/logrus`
)

func preDev() {
	log.Infof("Copying next.config.dev.js to next.config.js")
	cmd := exec.Command("cp", "next.config.dev.js", "next.config.js")
	cmd.Dir = "./services/frontend"
	
	logger := log.StandardLogger()
	logger.SetFormatter(&log.TextFormatter{})
	
	cmd.Stdout = logger.Out
	cmd.Stderr = logger.Out
	
	if err := cmd.Start(); err != nil {
		panic(err)
	}
}

func NewFrontendServiceDev() (interface{}, error) {
	log.Infof("Starting frontend service in development mode")
	preDev()
	cmd := exec.Command("npm", "run", "dev")
	cmd.Dir = "./services/frontend"
	
	logger := log.StandardLogger()
	logger.SetFormatter(&log.TextFormatter{})
	
	cmd.Stdout = logger.Out
	cmd.Stderr = logger.Out
	
	if err := cmd.Start(); err != nil {
		return nil, err
	}
	
	return nil, nil
}

//go:embed all:out
var nextFS embed.FS

func NewFrontendServiceProd() (interface{}, error) {
	log.Infof("Starting frontend service in Production mode")
	
	return nil, nil
}

func ReverseProxy(c *gin.Context) {
	remote, _ := url.Parse(fmt.Sprintf("http://%s:%d",
		config.Config.Webserver.FrontendHost,
		config.Config.Webserver.FrontendPort))
	proxy := httputil.NewSingleHostReverseProxy(remote)
	proxy.Director = func(req *http.Request) {
		req.Header = c.Request.Header
		req.Host = remote.Host
		req.URL = c.Request.URL
		req.URL.Scheme = remote.Scheme
		req.URL.Host = remote.Host
	}
	
	proxy.ServeHTTP(c.Writer, c.Request)
}

func GetNextFS() embed.FS {
	return nextFS
}

func SetupFrontendService() *di.Def {
	return &di.Def{
		Name: "frontend",
		Build: func(_ di.Container) (interface{}, error) {
			if config.Config.Env.Frontend == "development" {
				return NewFrontendServiceDev()
			}
			
			return NewFrontendServiceProd()
		},
	}
}
