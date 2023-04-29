package models

import (
	`github.com/latolukasz/beeorm`
)

type VisitEntity struct {
	beeorm.ORM `orm:"table=visits"`
	ID         uint64 `json:"id" yaml:"id"`
	IP         string `json:"ip" yaml:"ip"`
}
