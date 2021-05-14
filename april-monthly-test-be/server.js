const csv = require('csvtojson/v2')
const csvFilePath = './csv/netflix_titles.csv'
const jsonFilePath = './json/netflix_titles.json'
//node core modules
const fs = require('fs')

//crypto

const express = require("express");

const app = express();

const csvToJson = async (csvFilePath, jsonFilePath) => {
    try {
        const jsonData = await csv().fromFile(csvFilePath)
        console.log(jsonData)
        fs.writeFile(jsonFilePath, JSON.stringify(jsonData), (err) => {
            if (err) {
                console.log("Error in write file",err)
            }
            else {
                console.log("Json written successfully")
            }
        })
    }
    catch (err) {
        console.log("Error in csvToJsonConversion", err)
    }
}

//csvToJson(csvFilePath, jsonFilePath)

app.get('/netflix/:show_id', (req, res) => {
    const { show_id } = req.params
    fs.readFile(jsonFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Internal server error", success: false, response: err })
        }
        const parsedData = JSON.parse(data)
        const movie = parsedData.find(obj => obj.show_id === show_id)
        if (!movie) {
            return res.status(404).json({ message: "Not found", success: false, response: {} })
        }
        res.status(200).json({ success: true, message: "movie found successfully", response: movie })
    })
})

const PORT = 5000

app.listen(PORT, () => {
    console.log("Server started")
})
