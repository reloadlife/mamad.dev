# Mohammad Mahdi Afshar

My personal website, written in GoLang and NextJS13.

- Blog
- Portfolio
- Resume
- fun parts

## GoLang and NextJS13

- Golang Backend
- Embedded and ReverseProxy (for serving static files) in one binary
- [gin](https://github.com/gin-gonic/gin) as my web framework.
- using [gorm](https://gorm.io/) as my ORM. ([beeorm](https://beeorm.io) was also an option but had to remove it because
  i wanted to learn gorm)
- NextJS 13 (app directory) With TurboPack (dev) as front-end.
- Playing around with GitHub Actions, Docker, Heroku, Cloud Providers and ... .
- Jwt Authentication.

## Documents and Resources

### Deployment

#### Github Secrets (Actions)

- `SSH_PUBLIC_KEY`: ssh public key to connect to server
- `SSH_PRIVATE_KEY`: ssh private key to connect to server
- `SSH_HOST`: server host
- `SSH_USER`: server user
- `SSH_PORT`: server ssh port
- `SSH_PATH`: server path to deploy to
- `SSH_PROJECT_PATH`: server path to project
- `MYSQL_ROOT_PASSWORD`: mysql root password
- `ENV` : .env file content
- `CONFIG` : config file content