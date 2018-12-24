# Passport

Node.js server and client authentication using Passport.

## Prerequisites

- [Node.js](https://nodejs.org)

## Database

From `database` directory, instal dependencies:

```
npm install
```

From `database` directory, start database server:

```
npm start
```

## Server

From `server` directory, instal dependencies:

```
npm install
```

From `server` directory, start server:

```
npm start
```

## Client

From `client` directory, call the homepage saving the session id returned in a cookie file:

```
curl http://localhost:3000 -c cookies/cookie.txt
```

From `client` directory, call the `/login` route using the existing cookie file:

```
curl -X POST http://localhost:3000/login -b cookies/cookie.txt -H 'Content-Type: application/json' -d '{"email":"test@test.com", "password":"password"}'
```

From `client` directory, call the `/authrequired` route using the same existing cookie file:

```
curl -X GET http://localhost:3000/authrequired -b cookies/cookie.txt -L
```
