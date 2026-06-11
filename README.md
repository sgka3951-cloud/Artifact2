# Artifact2

A minimal Node.js tutorial server built with the [Express.js](https://expressjs.com/) web framework. It exposes two plain-text HTTP `GET` endpoints — `Hello world` at `/` and `Good evening` at `/good-evening`.

## Prerequisites

- [Node.js](https://nodejs.org/) **18 or higher** (required by Express 5).
- **npm** (bundled with Node.js) for installing dependencies and running the start script.

## Installation

Install the project dependencies:

```bash
npm install
```

This installs Express (`express` `^5.2.1`) and populates the `node_modules/` directory, which is git-ignored.

## Running the server

Start the server:

```bash
npm start
```

`npm start` runs `node server.js`. By default the server listens on `http://localhost:3000`. Set the `PORT` environment variable to listen on a different port:

```bash
PORT=8080 npm start
```

## Endpoints

| Method | Path            | Response      |
| ------ | --------------- | ------------- |
| `GET`  | `/`             | `Hello world`  |
| `GET`  | `/good-evening` | `Good evening` |

## Try it

With the server running, request each endpoint:

```bash
curl http://localhost:3000/             # -> Hello world
curl http://localhost:3000/good-evening # -> Good evening
```
