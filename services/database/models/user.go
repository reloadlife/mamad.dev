package models

import (
	`gorm.io/gorm`
)

type (
	User struct {
		gorm.Model
		FirstName string `json:"first_name" gorm:"type:varchar(100)"`
		LastName  string `json:"last_name" gorm:"type:varchar(100)"`
		Email     string `json:"email" gorm:"uniqueIndex;notNull;type:varchar(100)"`
		Password  string `json:"password" gorm:"type:varchar(255)"`
	}
)
