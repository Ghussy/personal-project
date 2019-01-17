require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const controller = require('./controller')


const { SERVER_PORT, SECRET, CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then( (db) => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port: ${SERVER_PORT}`)
    })
})


app.post('/create-user', controller.createUser)
app.post('/login', controller.login)