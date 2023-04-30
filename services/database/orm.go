package database

import (
	`errors`
	
	`github.com/go-sql-driver/mysql`
	"github.com/latolukasz/beeorm"
	`github.com/reloadlife/mamad.dev/v2/services`
	`github.com/reloadlife/mamad.dev/v2/services/config`
	`github.com/sarulabs/di`
	log `github.com/sirupsen/logrus`
	gormsql "gorm.io/driver/mysql"
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
				gormsql.Open(
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

func SetupORMService() *di.Def {
	return &di.Def{
		Name: services.Beeorm,
		Build: func(_ di.Container) (interface{}, error) {
			dbs := config.Config.Databases
			registryBeeorm := beeorm.NewRegistry()
			eventPool := "default"
			
			if len(dbs.Redis) == 0 {
				log.Warnf("No redis configuration found, Without redis, there won't be any caching available!")
			}
			
			if len(dbs.Mysql) < 1 {
				log.Fatal("No mysql configuration found, Without mysql, there won't be any database available!")
				return nil, errors.New("no mysql configuration found, Without mysql, there won't be any database available")
			}
			
			for _, m := range dbs.Mysql {
				registryBeeorm.RegisterMySQLPool(
					m.Username+":"+m.Password+"@tcp("+m.Host+":"+m.Port+")/"+m.Database,
					m.Name)
			}
			
			if len(dbs.Redis) > 0 {
				for _, r := range dbs.Redis {
					if r.Password != "" {
						registryBeeorm.RegisterRedisWithCredentials(r.Host+":"+r.Port,
							r.Namespace,
							r.Username,
							r.Password,
							r.Database,
							r.Name)
						continue
					}
					registryBeeorm.RegisterRedis(r.Host+":"+r.Port,
						r.Namespace,
						r.Database,
						r.Name)
				}
				
				for _, r := range dbs.Redis {
					if r.Name == "event" {
						eventPool = r.Name
					}
				}
				
				registryBeeorm.RegisterRedisStream("events", eventPool, []string{"event-reader", "subscriber"})
				registryBeeorm.RegisterRedisStream("logs", eventPool, []string{"log-reader", "subscriber"})
				registryBeeorm.RegisterRedisStream("audit", eventPool, []string{"audit-reader", "subscriber"})
			}
			
			for _, c := range dbs.Cache {
				registryBeeorm.RegisterLocalCache(c.MaxEntries, c.Name)
			}
			
			for _, _enum := range enums {
				registryBeeorm.RegisterEnumStruct(_enum.Name, _enum.Data, _enum.Default)
			}
			
			registryBeeorm.RegisterEntity(Entities...)
			
			validate, err := registryBeeorm.Validate()
			if err != nil {
				log.Fatal("Error Validating Databases: ", err.Error())
				return nil, err
			}
			
			engine := validate.CreateEngine()
			engine.EnableRequestCache()
			engine.EnableQueryDebugCustom(true, true, true)
			
			if len(dbs.Redis) > 0 {
				redis := engine.GetRedis(eventPool)
				redis.FlushDB()
			}
			
			alters := engine.GetAlters()
			for _, alter := range alters {
				alter.Exec()
				if !alter.Safe {
					log.Fatal("Doing an Unsafe UPGRADE: \n\n" + alter.SQL)
				}
			}
			
			backgroundConsumer := beeorm.NewBackgroundConsumer(engine)
			backgroundConsumer.RegisterLazyFlushQueryErrorResolver(func(_ beeorm.Engine, _ *beeorm.DB, sql string,
				queryError *mysql.MySQLError,
			) error {
				log.Errorf("lazy flush query [%s] faild with error %s",
					queryError.Message,
					queryError.Error())
				return queryError
			})
			
			backgroundConsumer.RegisterLazyFlushQueryErrorResolver(func(_ beeorm.Engine, _ *beeorm.DB, sql string,
				queryError *mysql.MySQLError,
			) error {
				log.Errorf("lazy flush query [%s] faild with error %s",
					queryError.Message,
					queryError.Error())
				if queryError.Number == 1062 {
					return nil
				}
				return queryError
			})
			
			return engine, err
		},
	}
}
