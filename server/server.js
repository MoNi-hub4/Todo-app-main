const express = require("express");
const connectToDB = require("./config/connectToDB");
const Todo = require("./models/todo");
var cors = require("cors");
if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}

const app = express();

//Configure Express App
app.use(express.json());
app.use(cors());

//Routing
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});
//Fetch all
app.get("/todo", async (req, res) => {
  // Find the Todos
  const todos = await Todo.find();

  //Respond with them
  res.json({ todos: todos });
});

//Fetch by id
app.get("/todo/:_id", async (req, res) => {
  // Get id off the url
  const todoId = req.params._id;
  // Find the todo using that id
  const todo = await Todo.findById(todoId);
  //Respond with the todo
  res.json({ todo: todo });
});

//Create new Todo
app.post("/todo", async (req, res) => {
  //get the sent in data off request body
  const { task, isCompleted } = req.body;
  //Create a note with it
  const todo = await Todo.create({
    task: task,
    isCompleted: isCompleted,
  });
  //Respond with the new note
  res.json({ todo: todo });
});

//Update existing Todo
app.put("/todo/:_id", async (req, res) => {
  //Get the id off the url
  const todoId = req.params._id;
  //Get the data off the req body
  const { task, isCompleted } = req.body;

  // Find and update the record
  await Todo.findByIdAndUpdate(todoId, {
    task: task,
    isCompleted: isCompleted,
  });

  //Find updated note
  const todo = await Todo.findById(todoId);
  //Respond with it
  res.json({ todo: todo });
});

// Delete a Todo
app.delete("/todo/:_id", async (req, res) => {
  //get id off the url
  const todoId = req.params._id;

  //Delete the record
  await Todo.deleteOne({ _id: todoId });

  //Respond
  res.json({ success: "Record Deleted" });
});

connectToDB;

app.listen(process.env.PORT);
