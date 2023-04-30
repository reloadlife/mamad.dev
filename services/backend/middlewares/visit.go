package middlewares

import (
	`github.com/gin-gonic/gin`
	`github.com/reloadlife/mamad.dev/v2/services`
	`github.com/reloadlife/mamad.dev/v2/services/database/models`
	`gorm.io/gorm`
	`gorm.io/gorm/clause`
)

func Visit(c *gin.Context) {
	visit := models.Visits{
		IP:        c.ClientIP(),
		Path:      c.Request.URL.Path,
		UserAgent: c.Request.UserAgent(),
	}
	db := services.GetService[*gorm.DB]("gorm")
	db.Clauses(clause.OnConflict{
		Columns: []clause.Column{{Name: "ip"}, {Name: "path"}, {Name: "user_agent"}},
		DoUpdates: clause.Assignments(map[string]interface{}{
			"count": gorm.Expr("count + ?", 1),
		}),
	}).Create(&visit)
	
	c.Set("visitId", visit.ID)
	
	c.Next()
}
