package database

import (
	`github.com/latolukasz/beeorm`
	`github.com/reloadlife/mamad.dev/v2/services/database/models`
)

var (
	Entities = []beeorm.Entity{
		&models.User{},
		&models.VisitEntity{},
	}
)
