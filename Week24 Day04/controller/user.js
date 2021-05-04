const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


//Config
const keys = require('../config/keys')

//node core module
const fs = require('fs')

module.exports = {
    //user register
    userRegister: (req, res) => {
        const { name, email, password } = req.body
        fs.readFile('./db/user.json', 'utf-8', async(err, data) => {
            if (err) {
                return res.status(500).json({ message: "Internal server error", success: false, response: err })
            }
            const id = uuidv4()
            let hashedPassword;
            hashedPassword = await bcrypt.hash(password, 10)
            let dataTosave = {
                name,
                email,
                id,
                password: hashedPassword
            }
            const parsedData = JSON.parse(data)
            const user = parsedData.find(obj => obj.email === dataTosave.email)
            if (user) {
                return res.status(409).json({ message: "Given user already exist", success: false, response: {} })
            }
            const array = JSON.parse(data)
            array.push(dataTosave)
            fs.writeFile('./db/user.json', JSON.stringify(array), (err) => {
                if (err) {
                    return res.status(500).json({ message: "Internal server error", success: false, response: err })
                }
                res.status(200).json({ success: true, message: "user has been registerd successfully", response: {name:dataTosave.name, email:dataTosave.email, id:dataTosave.id} })
            })
        })
    },
    userLogin: (req, res) => {
            const { email, password } = req.body
            fs.readFile('./db/user.json', 'utf-8', async(err, data) => {
            if (err) {
                return res.status(500).json({ message: "Internal server error", success: false, response: err })
            }
            const parsedData = JSON.parse(data)
            const user = parsedData.find(obj => obj.email === email)
            if (!user) {
                return res.status(404).json({ message: "user not found", success: false, response: {} })
            }
            const isCorrect = await bcrypt.compare(password, user.password)
            if (!isCorrect) {
                return res.status(401).json({ message: "Invalid credentials", success: false, response: {} })
            }
            const payload = {
                id: user.id,
                name:user.name,
                email: user.email
            }
            jwt.sign(payload, keys.secretKey,  { expiresIn: 7200 },(err, token)=>{
                res.status(200).json({
                    message: "User logged in successfully",
                    success: true,
                    token: 'Bearer ' + token
                });
            })
        })
    }
}