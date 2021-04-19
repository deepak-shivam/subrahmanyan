
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

// returning all todos
app.get('/getTodos', (request, response) => {
    response.status(200).json({success:true, message:`${todos.length} todos found successfuly`,result: todos})
    
})

//get single todo

app.get('/getSingleTodo/:id', (req, res) => {
    // param is an object
    const id = parseInt(req.params.id)
    const todo = todos.find(obj => obj.id === id)
    if (todo) {
        return res.status(200).json({message:"Todos found successfully", success: true,result: todo})
    }
    return res.status(404).json({message:"Not found", success:false, result:{}})
})

// To update todo
app.put('/updateTodo/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const todo = req.body
    const index = todos.findIndex(obj => obj.id === id)
    if (index !== -1) {
        todos[index] = todo
        return res.status(200).json({message:"Successfully updated", success:true, result: todos[index]})
    }
    return res.status(404).json({ message: "Not found", success: false, result: {} })
})


//delete a todo

app.delete('/deleteTodo/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = todos.findIndex(obj => obj.id === id)
    if (index !== -1) {
        todos.slice[index, 1]
        return res.status(200).json({message:"successfully deleted", success:true})
    }
    return res.status(404).json({message:'Not found', success:false})
})

//server will send something to clinet
// app.get('/health', (req, res) => {
//     res.send("its working")
// })

const PORT = 5555
app.listen(PORT, () => {
    console.log("server started")
})


//nodemon 