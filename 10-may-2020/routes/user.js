const express = require('express')

const routes = express.Router()


const {userLogin, userRegister} = require('../controllers/user')



routes.post('/register', userRegister)


routes.post('/login', userLogin)



module.exports = routes