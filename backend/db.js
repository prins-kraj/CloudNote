const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/cloudnote";

const connectToMongo = () => {
  mongoose.connect(mongoURI, ()=>{
    console.log("Connected to MongoDB");
  })
};

module.exports = connectToMongo;
