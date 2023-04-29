#!/usr/bin/env bash

cp services/frontend/next.config.build.js services/frontend/next.config.js
cd services/frontend/ && npm run export
cd ../..
cp services/frontend/next.config.dev.js services/frontend/next.config.js
go build main.go
