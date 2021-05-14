const mongoose = require('mongoose')


const { Schema } = mongoose


const userSchema = new Schema({
    name: {
        type: String,
        trime: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema)