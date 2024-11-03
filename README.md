## Project setup

```bash
$ npm install
```

## MySQL Docker setup 

```bash
  docker run --name mysql-graphql-tutorial \
    -e MYSQL_ROOT_PASSWORD=rootpassword \
    -e MYSQL_DATABASE=graphql_tutorial \
    -e MYSQL_USER=testuser \
    -e MYSQL_PASSWORD=testuser \
    -p 3306:3306 \
    -d mysql:latest
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

```
