package backend

import (
	`net/http`
	
	`github.com/gin-gonic/gin`
	`github.com/reloadlife/mamad.dev/v2/services/backend/controllers`
	`github.com/reloadlife/mamad.dev/v2/services/backend/token`
)

func Router(h *gin.Engine) {
	h.GET("/ping", controllers.Ping)
	r := h.Group("/api")
	
	{
		// public
		r.GET("/main", controllers.GetPublicDataController)
		r.POST("/login", controllers.Login)
	}
	
	{
		// private
		p := r.Group("")
		p.Use(token.JwtAuthMiddleware())
		p.GET("/me", func(c *gin.Context) {
			id, _ := c.Get("id")
			c.JSON(http.StatusOK, gin.H{
				"message": "me",
				"id":      id,
			})
		})
	}
}
