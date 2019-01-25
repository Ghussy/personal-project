require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const controller = require('./controller')

const app = express();
const { SERVER_PORT, SECRET, CONNECTION_STRING } = process.env;

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
app.get('/getUserInfo', controller.getUserInfo)
app.get('/logout', controller.logout)
app.post('/create-playlist', controller.createPlaylist)
app.get(`/getPlaylist`, controller.getPlaylist)
app.delete('/delete/:playlist', controller.deletePlaylist)
app.post('/save-song', controller.saveSong)
app.post('/get-songs', controller.getSongs)