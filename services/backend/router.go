package backend

import (
	`net/http`
	
	`github.com/gin-gonic/gin`
)

func Router(h *gin.Engine) {
	r := h.Group("/api")
	
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
}
