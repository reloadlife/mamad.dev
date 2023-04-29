package models

import (
	`time`
	
	`github.com/latolukasz/beeorm`
)

type (
	User struct {
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
