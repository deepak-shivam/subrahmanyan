const express = require('express')

//third party
const { v4: uuidv4 } = require('uuid');

//node core module
const fs = require('fs')


const app = express()

app.use(express.json())

const PORT = 5000



app.get('/book', (req, res) => {
    fs.readFile('./books.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Internal server error", success: false, response: err })
        }
        const parsedData = JSON.parse(data)
        res.status(200).json({ success: true, message: `${parsedData.length} books found successfully`, response: parsedData })
    })
})

// GET SINGLE BOOK
app.get('/book/:id', (req, res) => {
    // const id = req.params.id
    const { id } = req.params
    fs.readFile('./books.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Internal server error", success: false, response: err })
        }
        const parsedData = JSON.parse(data)
        const book = parsedData.find(obj => obj.id === id)
        if (!book) {
            return res.status(404).json({ message: "Not found", success: false, response: {} })
        }
        res.status(200).json({ name: true, message: "book found successfully", response: book })

    })
})

//ADD BOOK
app.post('/book', (req, res) => {
    const { body } = req
    const id = uuidv4()
    body["id"] = id
    fs.readFile('./books.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Internal server error", success: false, response: err })
        }
        const parsedData = JSON.parse(data)
        const book = parsedData.find(obj => obj.name === body.name)
        if (book) {
            return res.status(409).json({ message: "Given book already exist", success: false, response: {} })
        }
        const array = JSON.parse(data)
        array.push(body)
        fs.writeFile('./books.json', JSON.stringify(array), (err) => {
            if (err) {
                return res.status(500).json({ message: "Internal server error", success: false, response: err })
            }
            res.status(200).json({ success: true, message: "book added successfully", response: body })
        })
    })
})

//UPDATE BOOK
app.put('/book/:id', (req, res) => {
    const { body } = req
    const {id} = req.params
    fs.readFile('./books.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Internal server error", success: false, response: err })
        }
        const parsedData = JSON.parse(data)
        const index = parsedData.findIndex(obj => obj.id === id)
        if (index === -1) {
            return res.status(409).json({ message: "Invalid id", success: false, response: {}})
        }
        const array = JSON.parse(data)
        body["id"] = id
        array[index] = body
        fs.writeFile('./books.json', JSON.stringify(array), (err) => {
            if (err) {
                return res.status(500).json({ message: "Internal server error", success: false, response: err })
            }
            res.status(200).json({ success: true, message: "book updated successfully", response: body })
        })
    })
})


//DELETE BOOK
app.delete('/book/:id', (req, res) => {
    const {id} = req.params
    fs.readFile('./books.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Internal server error", success: false, response: err })
        }
        const parsedData = JSON.parse(data)
        const index = parsedData.findIndex(obj => obj.id === id)
        if (index === -1) {
            return res.status(409).json({ message: "Invalid id", success: false, response: {}})
        }
        const array = JSON.parse(data)
        array.splice(index,1)
        fs.writeFile('./books.json', JSON.stringify(array), (err) => {
            if (err) {
                return res.status(500).json({ message: "Internal server error", success: false, response: err })
            }
            res.status(200).json({ success: true, message: "book deleted successfully", response:{}})
        })
        
    })
})


app.listen(PORT, () => {
    console.log("Server started")
})