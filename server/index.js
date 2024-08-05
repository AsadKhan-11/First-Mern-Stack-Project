const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const userModel = require("./model/users");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://mrasad10khan:mongodb@cluster0.yz0l1cn.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/getUsers", (req, res) => {
  userModel
    .find({})
    .then(function (user) {
      res.json(user);
    })
    .catch(function (err) {
      res.json(err);
    });
});

app.listen(5000, () => {
  console.log("server listen");
});
