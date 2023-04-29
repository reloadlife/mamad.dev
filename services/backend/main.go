package backend

import (
	`io/fs`
	`net/http`
	
	`github.com/gin-gonic/gin`
	`github.com/reloadlife/mamad.dev/v2/services/config`
	`github.com/reloadlife/mamad.dev/v2/services/frontend`
	`github.com/sarulabs/di`
	log `github.com/sirupsen/logrus`
)

func run(handler *gin.Engine) {
	err := handler.Run(config.Config.Webserver.Host + ":" + config.Config.Webserver.Port)
	if err != nil {
		log.Errorf("Failed to start server: %s", err.Error())
	}
}

func runSSL(handler *gin.Engine) {
	err := handler.RunTLS(
		config.Config.Webserver.Host+":"+config.Config.Webserver.SSLPort,
		config.Config.Webserver.Certificate,
		config.Config.Webserver.CertificateKey,
	)
	if err != nil {
		log.Errorf("Failed to start SSL server: %s", err.Error())
	}
}

func SetupBackendService() *di.Def {
	return &di.Def{
		Name: "backend",
		Build: func(_ di.Container) (interface{}, error) {
			gin.SetMode(gin.DebugMode)
			
			if config.Config.Env.Backend != "development" {
				gin.SetMode(gin.ReleaseMode)
			}
			
			handler := gin.New()
			handler.Use(gin.Recovery())
			handler.Use(gin.Logger())
			
			Router(handler)
			
			if config.Config.Env.Frontend != "development" {
				distFS, err := fs.Sub(frontend.GetNextFS(), "out")
				if err != nil {
					log.Fatal(err)
				}
				handler.StaticFS("/", http.FS(distFS))
			}
			
			handler.NoRoute(frontend.ReverseProxy)
			
			go run(handler)
			if config.Config.Webserver.EnableSSL {
				go runSSL(handler)
			}
			
			return nil, nil
		},
	}
}
