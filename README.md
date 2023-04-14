## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Seed data
```bash
# login to database
docker exec -it zoo-db-1 mysql --user=$MYSQL_USER --database="zoo" --password=$MYSQL_PASSWORD
# execute mounted sql data
source /data/seed.sql
```
