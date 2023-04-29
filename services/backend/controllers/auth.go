package controllers

import (
	`net/http`
	
	`github.com/gin-gonic/gin`
	`github.com/latolukasz/beeorm`
	`github.com/reloadlife/mamad.dev/v2/services`
	`github.com/reloadlife/mamad.dev/v2/services/backend/token`
	`github.com/reloadlife/mamad.dev/v2/services/database/models`
	`golang.org/x/crypto/bcrypt`
)

type LoginInput struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func Login(c *gin.Context) {
	var input LoginInput
	
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	
	user := models.User{}
	orm := services.GetService[beeorm.Engine]("orm")
	if orm.SearchOne(beeorm.NewWhere("Email = ?", input.Username), &user) {
		err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password))
		if err == bcrypt.ErrMismatchedHashAndPassword {
			c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized."})
			return
		}
		
		if err == nil {
			tkn, _ := token.GenerateToken(uint(user.ID))
			c.JSON(http.StatusOK, gin.H{
				"status": "you are logged in.",
				"token":  tkn,
			})
			return
		}
	}
	
	c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized"})
}
