package database

type enum struct {
	Name    string
	Data    struct{}
	Default string
}

var (
	enums []enum
)
