<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

## Docker Database

```bash
#to check process
$ docker ps

#to start docker
$ docker compose up -d

#connect to db
$ docker exce -it <Container_Id> psql -U <DB_User> -d <DB_Name>
```

## API ENPOINTS

### Create Movie

- **URL:** `http://localhost:3000/api/movies`
- **Method:** `POST`
- **Request Body:**

```json
{
  "title": "Jumanji",
  "description": "A game adventure.",
  "genre": "Science Fiction",
  "rating": "9",
  "releaseDate": "2007-11-010T00:00:00.000Z"
}
```

### RESPONSE

```json
{
  "succes": true,
  "data": {
    "title": "Jumanji",
    "genre": "Science Fiction",
    "rating": "9",
    "description": "A game adventure.",
    "releaseDate": "2007-11-010T00:00:00.000Z",
    "id": 4
  },
  "message": "Movie Added Successfully!"
}
```

### GET ALL MOVIES

- **URL:** `http://localhost:3000/api/movies`
- **Method:** `GET`
- **Request Body:**

### RESPONSE

```json
{
  "movies": [
    {
      "id": 3,
      "title": "Interstellar",
      "genre": "Science Fiction",
      "rating": "9.2",
      "description": "A space exploration adventure.",
      "releaseDate": "2014-11-07"
    },
    {
      "id": 4,
      "title": "Jumanji",
      "genre": "Science Fiction",
      "rating": "9",
      "description": "A game adventure.",
      "releaseDate": "2007-11-10"
    }
  ],
  "message": "all movies are fetched successfully!"
}
```

### GET MOVIE BY GENRE

- **URL:** `http://localhost:3000/api/movies/genre?genre=Science-Fiction`
- **Method:** `GET`
- **Request Query:**

````json
  {
    "movies": [
      {
          "id": 3,
          "title": "Interstellar",
          "genre": "Science Fiction",
          "rating": "9.2",
          "description": "A space exploration adventure.",
          "releaseDate": "2014-11-07"
      },
    ]
  }
  ```
  ### GET MOVIE BY MOVIE ID
  - **URL:** `http://localhost:3000/api/rating/4`
  - **Method:** `GET`
  - **Request Query:**

  ```json
    {
      "success": true,
      "data": [
      {
          "id": 1,
          "score": 5,
          "feedback": "Amazing movie",
          "movie": {
              "id": 4,
              "title": "Jumanji",
              "genre": "Science Fiction",
              "rating": "9",
              "description": "A game adventure.",
              "releaseDate": "2007-11-10"
          }
      }
    ],
     "message": "Movies Fetched Successfuly"
    }
  ```
  ### Create Movie
  - **URL:** `http://localhost:3000/api/rating`
  - **Method:** `POST`
  - **Request Body:**
  ```json
  {
     "score": "5",
    "feedback": "Amazing movie",
    "movieId": "4"
  }
````

### RESPONSE

```json
{
  "success": true,
  "message": "Ratings added succesfully",
  "data": {
    "score": 5,
    "feedback": "Amazing movie",
    "movie": {
      "id": 4,
      "title": "Jumanji",
      "genre": "Science Fiction",
      "rating": "9",
      "description": "A game adventure.",
      "releaseDate": "2007-11-10"
    },
    "id": 1
  }
}
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
