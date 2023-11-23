const express = require("express");
const mongoose = require("mongoose", { useNewUrlParser: true });
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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
  console.log("server run in port 3000");
});
