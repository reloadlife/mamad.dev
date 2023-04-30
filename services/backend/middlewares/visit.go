package middlewares

import (
	`time`
	
	`github.com/gin-gonic/gin`
	`github.com/latolukasz/beeorm`
	`github.com/reloadlife/mamad.dev/v2/services`
	`github.com/reloadlife/mamad.dev/v2/services/database/models`
	`gorm.io/gorm`
	`gorm.io/gorm/clause`
)

func Visit(c *gin.Context) {
	if services.HasService(services.Gorm) {
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
	}
	
	if services.HasService(services.Beeorm) {
		visit := models.VisitEntity{
			IP:        c.ClientIP(),
			Path:      c.Request.URL.Path,
			CreatedAt: time.Now(),
			UserAgent: c.Request.UserAgent(),
		}
		orm := services.GetService[beeorm.Engine]("orm")
		
		visit.SetOnDuplicateKeyUpdate(beeorm.Bind{
			"count": visit.Count + 1,
		})
		_ = orm.FlushWithFullCheck(&visit)
		c.Set("visitId", visit.ID)
	}
	c.Next()
}
