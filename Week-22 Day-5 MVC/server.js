const express = require('express')

const app = express()

const bookRoutes = require('./routes/book')

app.use(express.json())

app.use('/book',bookRoutes)

const PORT = 5000

app.listen(PORT, () => {
    console.log("Server started")
})