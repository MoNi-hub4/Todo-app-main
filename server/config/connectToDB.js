const mongoose = require("mongoose");
if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}

async function connectToDB() {
  try {
    await mongoose.connect(process.env.URI
      
    );
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDB();
