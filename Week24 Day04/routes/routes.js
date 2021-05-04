const express = require('express')

const routes = express.Router()


const {userRegister, userLogin} = require('../controller/user')


//user register
routes.post('/user/register', userRegister )

//user login
routes.post('/user/login', userLogin)

// //get all movies
// routes.get('/', getBooks)

// // Get single movies
// routes.get('/:id', getBook)

// //Add Movie
// routes.post('/', addBook)

// //update movie
// routes.put('/:id', updateBook)

// //delete movie
// routes.delete('/:id', deleteBook)

module.exports = routes