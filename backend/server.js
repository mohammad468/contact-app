const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose", { useNewUrlParser: true });

mongoose
  .connect("mongodb://localhost:27017/courseDb")
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("db not connected", err);
  });

app.get("/", (req, res) => {
  console.log("start server in port 3000");
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("server run port 3000");
});
