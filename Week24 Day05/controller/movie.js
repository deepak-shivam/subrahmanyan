//third party
const { v4: uuidv4 } = require('uuid');

//node core module
const fs = require('fs')

module.exports = {
    //business logic of get list of books
    getMovies: (req, res) => {
        fs.readFile('./db/movie.json', 'utf-8', (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Internal server error", success: false, response: err })
            }
            //converty json to javascript object
            const parsedData = JSON.parse(data)
            res.status(200).json({ success: true, message: `${parsedData.length} movies found successfully`, response: parsedData })
        })
    },
    //it will return single book
    getMovie: (req, res) => {
        const { id } = req.params
        fs.readFile('./db/movie.json', 'utf-8', (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Internal server error", success: false, response: err })
            }
            const parsedData = JSON.parse(data)
            const movie = parsedData.find(obj => obj.id === id)
            if (!movie) {
                return res.status(404).json({ message: "Not found", success: false, response: {} })
            }
            res.status(200).json({ success: true, message: "movie found successfully", response: movie })
        })
    },
    //add new book
    addMovie: (req, res) => {
        const { body } = req
        const id = uuidv4()
        // body.id = id
        body["id"] = id
        fs.readFile('./db/movie.json', 'utf-8', (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Internal server error", success: false, response: err })
            }
            const parsedData = JSON.parse(data)
            const movie = parsedData.find(obj => obj.title === body.title)
            if (movie) {
                return res.status(409).json({ message: "Given movie already exist", success: false, response: {} })
            }
            const array = JSON.parse(data)
            array.push(body)
            fs.writeFile('./db/movie.json', JSON.stringify(array), (err) => {
                if (err) {
                    return res.status(500).json({ message: "Internal server error", success: false, response: err })
                }
                res.status(200).json({ success: true, message: "movie added successfully", response: body })
            })
        })
    },
    //it will update a book
    updateMovie: (req, res) => {
        const { body } = req
        const { id } = req.params
        fs.readFile('./db/movie.json', 'utf-8', (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Internal server error", success: false, response: err })
            }
            const parsedData = JSON.parse(data)
            const index = parsedData.findIndex(obj => obj.id === id)
            if (index === -1) {
                return res.status(409).json({ message: "Invalid id", success: false, response: {} })
            }
            const array = JSON.parse(data)
            body["id"] = id
            array[index] = body
            fs.writeFile('./db/movie.json', JSON.stringify(array), (err) => {
                if (err) {
                    return res.status(500).json({ message: "Internal server error", success: false, response: err })
                }
                res.status(200).json({ success: true, message: "movie updated successfully", response: body })
            })
        })
    },
    //it will delete a book
    deleteMovie: (req, res) => {
        const { id } = req.params
        fs.readFile('./db/movie.json', 'utf-8', (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Internal server error", success: false, response: err })
            }
            const parsedData = JSON.parse(data)
            const index = parsedData.findIndex(obj => obj.id === id)
            if (index === -1) {
                return res.status(409).json({ message: "Invalid id", success: false, response: {} })
            }
            const array = JSON.parse(data)
            array.splice(index, 1)
            fs.writeFile('./db/movie.json', JSON.stringify(array), (err) => {
                if (err) {
                    return res.status(500).json({ message: "Internal server error", success: false, response: err })
                }
                res.status(200).json({ success: true, message: "movie deleted successfully", response: {} })
            })
        })
    }
}