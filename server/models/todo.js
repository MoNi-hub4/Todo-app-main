const mongoose = require("mongoose");

// Defining the Schema
const todoSchema = new mongoose.Schema({
    task:String,
    isCompleted:Boolean,
})

//Creating the Model
const Todo = mongoose.model("Todo", todoSchema);

//exporing the model
module.exports = Todo;

