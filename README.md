# Passport

## Prerequisites

- [Node.js](https://nodejs.org)

## Server

From `server/` directory, instal project dependencies:

```
npm install
```

From `server/` directory, start server:

```
npm run start:dev
```

## Client

From `client/` directory, call the `curl` command saving the session id 
returned in a cookie file:

```
curl http://localhost:3000 -c cookies/cookie.txt
```

From `client/` directory, call the cURL command using the saved session:

```
curl http://localhost:3000 -c cookies/cookie.txt
```
