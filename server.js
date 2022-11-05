const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = express.Router();
const user = require("./models/User");

dotenv.config();
const app = express();

//Connect  database locally
mongoose
  .connect("mongodb://localhost:27017/checkrest")
  .then(() => console.log("connected to the mongoDB"))
  .catch((err) => console.log("could not connect to the mongoDB", err));

//lunch a server with express in the server.js file
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listenning on port ${port}`));
//routes
app.get("/api/users", (req, res) => {
  const getContact = async () => {
    try {
      const data = await user.find();
      await res.json({ msg: data });
    } catch (err) {
      console.log(err.message);
    }
  };
  getContact();
});

//new USER
app.post("/add", async (req, res) => {
  try {
    const newUser = new user({
      name: req.body.name,
      age: req.body.email,
      email: req.body.phone,
    });
    await newUser.save((err, result) => {
      if (err) {
        console.log(err.message);
      }
      if (result) {
        console.log("user added successfully");
      }
    });
  } catch (err) {
    console.log(err.message);
  }
});
