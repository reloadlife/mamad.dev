package config

import (
	`os`
	
	"gopkg.in/yaml.v3"
)

// "root:app@tcp(127.0.0.1:3306)/database"

type Mysql struct {
	Host     string `yaml:"host"`
	Port     string `yaml:"port"`
	Username string `yaml:"username"`
	Password string `yaml:"password"`
	Database string `yaml:"database"`
	
	Name string `yaml:"name"`
}

type Redis struct {
	Host      string `yaml:"host"`
	Port      string `yaml:"port"`
	Username  string `yaml:"username"`
	Password  string `yaml:"password"`
	Namespace string `yaml:"namespace"`
	
	Database int    `yaml:"database"`
	Name     string `yaml:"name"`
}

type Cache struct {
	MaxEntries int    `yaml:"max_entries"`
	Name       string `yaml:"name"`
}

type Databases struct {
	Mysql []Mysql `yaml:"mysql"`
	Redis []Redis `yaml:"redis"`
	Cache []Cache `yaml:"cache"`
}

type Environment struct {
	Frontend  string `yaml:"frontend"`
	Backend   string `yaml:"backend"`
	DebugMode bool   `yaml:"debug_mode"`
}

type WebServer struct {
	Host string `yaml:"host"`
	Port string `yaml:"port"`
	
	EnableSSL      bool   `yaml:"enable_ssl"`
	SSLPort        string `yaml:"ssl_port"`
	CertificateKey string `yaml:"certificate_key"`
	Certificate    string `yaml:"certificate"`
	
	FrontendHost string `yaml:"frontend_host"`
	FrontendPort int    `yaml:"frontend_port"`
}

type config struct {
	Databases Databases   `yaml:"databases"`
	Env       Environment `yaml:"environment"`
	Webserver WebServer   `yaml:"web"`
}

var (
	Config config
)

func init() {
	file, err := os.ReadFile("config.yaml")
	if err != nil {
		panic("Failed to load config: " + err.Error())
	}
	
	err = yaml.Unmarshal(file, &Config)
	if err != nil {
		panic("Failed to load config: " + err.Error())
	}
}
