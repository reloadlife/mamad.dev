FROM node:16-alpine

WORKDIR /app

COPY api api
COPY .nvmrc .
COPY graphql.config.js .
COPY package.json .
COPY redwood.toml .
COPY yarn.lock .

RUN yarn install
RUN yarn add react react-dom --ignore-workspace-root-check
RUN yarn rw build api
RUN rm -rf ./api/src

WORKDIR /app/api

EXPOSE 8911

ENTRYPOINT [ "yarn", "rw", "serve", "api", "--port", "8911", "--rootPath", "/api" ]
