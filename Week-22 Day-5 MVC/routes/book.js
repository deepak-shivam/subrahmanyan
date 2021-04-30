const express = require('express')

const routes = express.Router()

//Es6 pattern
const {getBooks, getBook,addBook, updateBook, deleteBook} = require('../controllers/book')

//get all books
routes.get('/', getBooks)

// GET SINGLE BOOK
routes.get('/:id', getBook)

//ADD BOOK
routes.post('/', addBook)

//UPDATE BOOK
routes.put('/:id', updateBook)

//DELETE BOOK
routes.delete('/:id', deleteBook)

module.exports = routes