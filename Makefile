build:
	cp services/frontend/next.config.build.js services/frontend/next.config.js
	npm run export
	cp services/frontend/next.config.dev.js services/frontend/next.config.js
	go build main.go