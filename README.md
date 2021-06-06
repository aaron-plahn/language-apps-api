# Language Apps API

## Description

This project was built with [Nest](https://github.com/nestjs/nest). We take advantage of Nest's dependency injection schemes for easy testing, flexibility to change persistence mechanisms in different environments, and in general to decouple our model from the persistence mechanism.

For convenience, we use TypeORM to implement repositories for entities.

## Configuration

Dot-env is used for configuring enviornments. Copy the provided sample `.env-sample` to `.env` in the root directory prior to running the application.

Customize `config/config.service.ts` to change the configuration. E.g. you may want to configure a different database than the default PostgreSQL. Provided your database of choice is supported by TypeORM, this should be very straight-forward.

## Dependencies

- NodeJS v15.12.0
- npm 7.6.3

### Optional Dependencies

To make use of the scrip start-db.sh (and command npm run start:dev:db), you must have `Docker` installed.

Note that the development Postgres instance does not persist data and is not configured for production.

### Environment Variables

Set the following environment variables in order to use the dev db script mentioned above. Make sure that they are available to this script. One approach is to export these in a script in `/etc/profile.d/my-script.sh`.

```my-script.sh
export SERVER=server_name
export PW=confidential_password
export DB=dev_database_name
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# start development database
$ npm run start:dev:db

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

## Support

This project is provided as-is with no direct end-user support. Nest, however has a great community and comprehensive documentation.

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## About

- Author - [Aaron Plahn](https://github.com/aaron-plahn)
- Website - [https://www.digiteched.com](https://www.digiteched.com/)

## License

Nest is [MIT licensed](LICENSE).
