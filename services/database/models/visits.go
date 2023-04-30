package models

import (
	`time`
	
	`github.com/latolukasz/beeorm`
	`gorm.io/gorm`
)

type (
	Visits struct {
		gorm.Model
		IP        string `gorm:"uniqueIndex:ip_path;type:varchar(100)"`
		Path      string `gorm:"uniqueIndex:ip_path;type:varchar(100)"`
		UserAgent string `gorm:"uniqueIndex:ip_path;type:varchar(255)"`
		Count     uint64
	}
	VisitEntity struct {
		beeorm.ORM `orm:"table=visits"`
		ID         uint64    `json:"id" yaml:"id"`
		IP         string    `json:"ip" yaml:"ip" orm:"unique=ip_path"`
		Path       string    `json:"path" yaml:"path" orm:"unique=ip_path:2"`
		CreatedAt  time.Time `json:"created_at" yaml:"created_at" orm:"time"`
		UserAgent  string    `orm:"unique=ip_path:2"`
		Count      uint64    `json:"count" yaml:"count"`
	}
)
