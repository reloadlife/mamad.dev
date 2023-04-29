package main

import (
	`embed`
	`fmt`
	`html/template`
	`net/http`
	`os`
	
	`github.com/gin-gonic/gin`
	log `github.com/sirupsen/logrus`
)

//go:embed assets/* wwwroot/*
var f embed.FS

func main() {
	log.Infof("Hello!")
	gin.SetMode(gin.ReleaseMode)
	
	ginEngine := gin.New()
	ginEngine.Use(gin.Logger(), gin.Recovery())
	
	templateParsed := template.Must(
		template.New("").ParseFS(
			f,
			"wwwroot/*.gohtml",
		),
	)
	ginEngine.SetHTMLTemplate(templateParsed)
	ginEngine.StaticFS("/public", http.FS(f))
	
	// RegisterRoutes(ginEngine)
	
	Host := os.Getenv("HOST")
	if Host == "" {
		Host = "127.0.0.1"
	}
	
	Port := os.Getenv("PORT")
	if Port == "" {
		Port = "8080"
	}
	
	go func() {
		Cert := os.Getenv("SSL_CERTIFICATE")
		if Cert == "" {
			Cert = "cert.pem"
		}
		
		Key := os.Getenv("SSL_CERTIFICATE_KEY")
		if Key == "" {
			Key = "key.pem"
		}
		
		SSLPort := os.Getenv("SSL_PORT")
		if SSLPort == "" {
			SSLPort = "0"
		}
		log.Infof("Starting SSL on https://%s:%s", Host, SSLPort)
		err := ginEngine.RunTLS(fmt.Sprintf("%s:%s", Host, SSLPort), Cert, Key)
		if err != nil {
			log.Error("Error while Running GIN SSL: ", err.Error())
			return
		}
	}()
	
	go func() {
		log.Infof("Starting SSL on http://%s:%s", Host, Port)
		err := ginEngine.Run(fmt.Sprintf("%s:%s", Host, Port))
		if err != nil {
			log.Error("Error while Running GIN: ", err.Error())
			return
		}
	}()
	
	select {}
}
