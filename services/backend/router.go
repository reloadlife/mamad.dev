package backend

import (
	`net/http`
	
	`github.com/gin-gonic/gin`
	`github.com/reloadlife/mamad.dev/v2/services/backend/controllers`
	`github.com/reloadlife/mamad.dev/v2/services/backend/token`
)

func Router(h *gin.Engine) {
	r := h.Group("/api")
	
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	
	r.POST("/login", controllers.Login)
	
	{
		// private
		p := r.Group("")
		p.Use(token.JwtAuthMiddleware())
		p.GET("/me", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "me",
				"id":      c.Get("id"),
			})
		})
	}
}
