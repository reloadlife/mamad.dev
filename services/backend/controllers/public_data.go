package controllers

import (
	`net/http`
	
	`github.com/gin-gonic/gin`
)

func Ping(c *gin.Context) {
	c.String(http.StatusOK, "OK")
}

func GetPublicDataController(c *gin.Context) {
	blogPosts := gin.H{
		"posts": []gin.H{
			{
				"id":    1,
				"title": "Hello World",
			},
			{
				"id":    2,
				"title": "Hello World 2",
			},
		},
	}
	c.JSON(http.StatusOK, gin.H{
		"status": "OK",
		"data": gin.H{
			"blog": blogPosts,
		},
	})
}
