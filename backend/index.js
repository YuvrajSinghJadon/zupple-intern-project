require("dotenv").config();

var mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://yoitsyuvraj1:0987654321@mydatabase.iyyajt4.mongodb.net/blockchain?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("conneecteed");
  })
  .catch((error) => {
    console.log("not");
  });

const express = require("express");
const app = express();

var adminRoute = require("./routes/adminRoute");

app.use("/api", adminRoute);

app.listen(3000, function () {
  console.log("app is running");
});
