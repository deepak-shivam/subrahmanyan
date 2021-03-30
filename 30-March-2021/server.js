const express = require('express')

const app = express()


// Middleware
app.use(express.json())


app.get('/allData', (req, res) => {
    return res.send("Hey man its working")
})

app.post('/saveData', (req, res) => {
    // req is an object
    console.log("body", req.body)
    return res.send("data has been saved to database")
})

app.listen(3000, () => {
    console.log("server started on port 3000")
})