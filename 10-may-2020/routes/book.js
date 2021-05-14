const express = require('express')
const passport = require('passport')

const routes = express.Router()

//Es6 pattern
const {getBooks, getBook,addBook,updateBook, deleteBook} = require('../controllers/book')

//get all books
routes.get('/', passport.authenticate('jwt', { session: false }), getBooks)

// GET SINGLE BOOK
routes.get('/:id', passport.authenticate('jwt', { session: false }), getBook)

//ADD BOOK
routes.post('/', passport.authenticate('jwt', { session: false }), addBook)

//UPDATE BOOK
routes.put('/:id', passport.authenticate('jwt', { session: false }), updateBook)

//DELETE BOOK
routes.delete('/:id', deleteBook)

module.exports = routes