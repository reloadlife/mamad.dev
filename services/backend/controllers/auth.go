package controllers

import (
	`net/http`
	
	`github.com/gin-gonic/gin`
	`github.com/latolukasz/beeorm`
	`github.com/reloadlife/mamad.dev/v2/services`
	`github.com/reloadlife/mamad.dev/v2/services/backend/token`
	`github.com/reloadlife/mamad.dev/v2/services/database/models`
	`golang.org/x/crypto/bcrypt`
	`gorm.io/gorm`
)

type LoginInput struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func auth(id uint, password, inputPassword string, c *gin.Context) bool {
	err := bcrypt.CompareHashAndPassword([]byte(password), []byte(inputPassword))
	if err == bcrypt.ErrMismatchedHashAndPassword {
		c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized."})
		return true
	}
	
	if err == nil {
		tkn, _ := token.GenerateToken(id)
		c.JSON(http.StatusOK, gin.H{
			"status": "you are logged in.",
			"token":  tkn,
		})
		return true
	}
	return false
}

func Login(c *gin.Context) {
	var input LoginInput
	
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	
	if services.HasService(services.Gorm) {
		user := models.User{}
		db := services.GetService[*gorm.DB](services.Gorm)
		if db.Where("email = ?", input.Username).First(&user).Error == nil {
			if auth(user.ID, user.Password, input.Password, c) {
				return
			}
		}
	}
	
	if services.HasService(services.Beeorm) {
		user := models.UserEntity{}
		orm := services.GetService[beeorm.Engine](services.Beeorm)
		if orm.SearchOne(beeorm.NewWhere("Email = ?", input.Username), &user) {
			if auth(uint(user.ID), user.Password, input.Password, c) {
				return
			}
		}
	}
	
	c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized"})
}
