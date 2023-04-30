package database

import (
	`github.com/reloadlife/mamad.dev/v2/services/database/models`
)

var (
	GormEntities = []interface{}{
		&models.User{},
		&models.Visits{},
	}
)
