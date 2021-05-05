const express = require('express')

const routes = express.Router()

const passport = require('passport')


const {userRegister, userLogin} = require('../controller/user')

const {addMovie, getMovie, getMovies, updateMovie, deleteMovie} = require('../controller/movie')


//user register
routes.post('/user/register', userRegister )

//user login
routes.post('/user/login', userLogin)

//get all movies
routes.get('/movie',passport.authenticate('jwt', { session: false }), getMovies)

// Get single movies
routes.get('/movie/:id',passport.authenticate('jwt', { session: false }), getMovie)

//Add Movie
routes.post('/movie',passport.authenticate('jwt', { session: false }), addMovie)

//update movie
routes.put('/movie/:id',passport.authenticate('jwt', { session: false }), updateMovie)

//delete movie
routes.delete('/movie/:id',passport.authenticate('jwt', { session: false }), deleteMovie)

module.exports = routes