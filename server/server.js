const express = require('express')
const uuid = require('uuid/v4')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const app = express()

app.use(session({
  genid: () => uuid(),
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.get('/', (req, res) => {
  console.log('Session ID:', req.sessionID)
  res.send('You hit home page\n')
})

app.listen(3000, () => console.log('Listening on localhost:3000'))
