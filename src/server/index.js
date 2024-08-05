const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors);
app.use(express.json());

mongoose.connect(
  "mongodb+srv://mrasad10khan:mongodb@cluster0.yz0l1cn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.listen(3001, () => {
  console.log("Server listening");
});
