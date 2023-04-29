package middlewares

import (
	`github.com/gin-gonic/gin`
)

var (
	Middlewares = []gin.HandlerFunc{
		Visit,
	}
)
