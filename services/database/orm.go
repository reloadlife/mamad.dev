package database

import (
	`errors`
	
	`github.com/reloadlife/mamad.dev/v2/services`
	`github.com/reloadlife/mamad.dev/v2/services/config`
	`github.com/sarulabs/di`
	log `github.com/sirupsen/logrus`
	"gorm.io/driver/mysql"
	`gorm.io/gorm`
)

func SetupGORMService() *di.Def {
	return &di.Def{
		Name: services.Gorm,
		Build: func(_ di.Container) (interface{}, error) {
			dbs := config.Config.Databases
			if len(dbs.Mysql) < 1 {
				log.Fatal("No mysql configuration found, Without mysql, there won't be any database available!")
				return nil, errors.New("no mysql configuration found, Without mysql, there won't be any database available")
			}
			
			if len(dbs.Mysql) > 1 {
				log.Warn("Multiple mysql configuration found, Using the first one!")
			}
			
			m := dbs.Mysql[0]
			open, err := gorm.Open(
				mysql.Open(
					m.Username+":"+m.Password+"@tcp("+m.Host+":"+m.Port+")/"+m.Database,
				),
				&gorm.Config{},
			)
			
			err = open.AutoMigrate(GormEntities...)
			if err != nil {
				return nil, err
			}
			
			if err != nil {
				return nil, err
			}
			return open, nil
		},
	}
}
