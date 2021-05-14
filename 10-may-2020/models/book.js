const mongoose = require('mongoose')


const { Schema } = mongoose


const bookSchema = new Schema({
    name: {
        type: String,
        trime: true,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true,
        trime: true
    }
})

module.exports = mongoose.model('book', bookSchema)