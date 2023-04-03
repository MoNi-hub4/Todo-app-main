const express = require("express");
const connectToDB = require("./config/connectToDB");
const Todo = require("./models/todo")

const app = express();

//Configure Express App
app.use(express.json())

//Routing
//Fetch all
app.get("/todo" , async (req , res) => {
    // Find the Todos
    const todos = await Todo.find();

    //Respond with them
    res.json({todos:todos})
})

//Fetch by id
app.get("/todo/:_id" , async(req, res) =>{
    // Get id off the url
    const todoId = req.params._id
    // Find the todo using that id
    const todo = await Todo.findById(todoId)
    //Respond with the todo
    res.json({todo : todo})
})

//Create new Todo
app.post("/todo" , async(req ,res) => {
    //get the sent in data off request body
    const {task , isCompleted} = req.body;
    //Create a note with it
    const todo = await Todo.create({
        task:task,
        isCompleted:isCompleted,
        
    })
    //Respond with the new note
    res.json({todo:todo})
})

connectToDB;

app.listen(3000);
