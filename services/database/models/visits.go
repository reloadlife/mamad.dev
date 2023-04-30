package models

import (
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
)
