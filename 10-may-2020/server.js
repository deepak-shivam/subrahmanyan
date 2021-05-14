const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const app = express()

const bookRoutes = require('./routes/book')
const userRoutes = require('./routes/user')

app.use(express.json())

// Passport Middleware
app.use(passport.initialize());

// Passport Config.
require("./config/passport")(passport);

app.use('/book', bookRoutes)
app.use('/user', userRoutes)

const PORT = 5000


//Database connection
mongoose.connect("mongodb://127.0.0.1:27017/movie-subramanyam"
    , { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }).then(() => {
        app.listen(PORT)
        console.log("server Started and database connected")
    }).catch((err) => {
        console.log("Error in connecting to DataBase", err.message)
    })