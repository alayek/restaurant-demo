# Introduction

A sample restaurant menu management system, built with Nest JS. This is to understand and evaluate [Nest JS](https://github.com/nestjs/nest) as a framework.

## What do I need to run it locally?

You need the following pieces of software in your system:

- [`fnm`](https://github.com/Schniz/fnm), a Node version manager
- [`yarn`](https://classic.yarnpkg.com/), a package manager and task runner

## Installation

Switch to right Node version

```bash
$ fnm use # type Y if you don't have this version of Node, when prompted
```

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod # builds and runs the ES5 output
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
