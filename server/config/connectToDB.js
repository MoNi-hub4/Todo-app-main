const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://moni:1M2o3n4i@todo.jtzrgec.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDB();
