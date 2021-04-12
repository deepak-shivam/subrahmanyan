
const express = require('express')

const app = express()


const todos = []


//middleware
app.use(express.json())

// interaction between client and server

// different endpoint
// CRUD
// four different http request
// get => read something
// post => to create something
// put => to update 
// delete => to delete
    
// TODO Application

// user can create todo
    
// user can get all todo

// user can able to get single todo

// update todo

// delete todo


// route/endpoint for create todo
// client server model

// if client(web browser) wants to send something to a server
app.post('/addTodo', (req, res) => {

    //request is an object

    const todo = req.body

    // store in your database
    todos.push(todo)


    //server will send response

    //res.send("I got your request")

    res.status(201).json({"success":true, message:"Todo has been added successfully","count":todos.length, response: todos})

})

//server will send something to clinet
app.get('/health', (req, res) => {
    res.send("its working")
})

const PORT = 5555
app.listen(PORT, () => {
    console.log("server started")
})


//nodemon 