package main

import (
	`github.com/reloadlife/mamad.dev/v2/services`
	`github.com/reloadlife/mamad.dev/v2/services/backend`
	`github.com/reloadlife/mamad.dev/v2/services/database`
	`github.com/reloadlife/mamad.dev/v2/services/frontend`
)

func main() {
	services.SetupServices(
		// database.SetupORMService(),
		database.SetupGORMService(),
		backend.SetupBackendService(),
		frontend.SetupFrontendService(),
	)
	
	select {}
}
