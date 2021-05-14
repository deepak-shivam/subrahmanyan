const mongoose = require('mongoose')

const { Schema } = mongoose


const pictureSchema = new Schema({
    title: {
        type: String
    },
    img_url: {
        type: String
    }
})

module.exports = mongoose.model('picture', pictureSchema)