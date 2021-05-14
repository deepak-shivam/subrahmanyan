
const Book = require('../models/book')


module.exports = {
    //business logic of get list of books
    getBooks: async (req, res) => {
        try {
            //.find({}) returns an array of all documents
            const books = await Book.find({})
            return res.status(200).json({ success: true, message: `${books.length} found successfully`, response: books })
        }
        catch (err) {
            console.log("Error in getBooks", err)
            return res.status(500).json({ success: false, message: "Internal server error", response: err })
        }
    },
    //it will return single book
    getBook: async (req, res) => {
        try {
            const { id } = req.params
            const book = await Book.findById(id)
            if (!book) {
                return res.status(404).json({ success: false, message: "Book not found", response: {} })
            }
            return res.status(200).json({ success: true, message: "Book found successfully", response: book })
        }
        catch (err) {
            console.log("Error in getBook", err)
            return res.status(500).json({ success: false, message: "Internal server error", response: err })
        }
    },
    //add new book
    addBook: async (req, res) => {
        try {
            const { name, year, author } = req.body
            const book = await new Book({
                name,
                year,
                author
            })
            await book.save()
            return res.status(201).json({ success: true, message: "new book added successfuly", response: book })
        }
        catch (err) {
            console.log("Error in addBook", err)
            return res.status(500).json({ success: false, message: "Internal server error", response: err })
        }
    },
    updateBook: async (req, res) => {
        try {
            const { id } = req.params
            const book = await Book.findByIdAndUpdate(id, req.body, { upsert: true })
            return res.status(200).json({success:true, message:"Book update succesfully", response: book})

        }
        catch (err) {
            console.log("Error in addBook", err)
            return res.status(500).json({ success: false, message: "Internal server error", response: err })
        }
    },
    //it will delete a book
    deleteBook: async (req, res) => {
        try {
            const { id } = req.params
            const book = await Book.findByIdAndDelete(id)
            if (!book) {
                return res.status(404).json({ success: false, messsage: "Book not found", response: {} })
            }
            return res.status(200).json({ success: true, message: "Book deleted successfully", response: book })

        }
        catch (err) {
            console.log("Error in deleteBook", err)
            return res.status(500).json({ success: false, message: "Internal server error", response: err })
        }

    }
}