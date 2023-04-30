package models

import (
	`time`
	
	`github.com/latolukasz/beeorm`
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
	
	UserEntity struct {
		beeorm.ORM `orm:"table=users"`
		ID         uint64    `json:"id"`
		FirstName  string    `json:"first_name"`
		LastName   string    `json:"last_name"`
		Email      string    `json:"email" orm:"required;unique;index"`
		Password   string    `json:"password"`
		CreatedAt  time.Time `json:"created_at" orm:"time"`
		UpdatedAt  time.Time `json:"updated_at" orm:"time"`
	}
)
