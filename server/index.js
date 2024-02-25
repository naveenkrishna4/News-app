const express = require("express");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const connectdb = require("./config/dbconnect");
const dotenv = require("dotenv").config();
const users = require("./model/usermodel");

connectdb();
const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await users.findOne({ email });
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      res.json("Success");
    } else {
      res.json("Incorrect email or password");
    }
  } else {
    res.json("No record");
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedpw = await bcrypt.hash(password, 10);
  if (!name || !email || !password) {
    res.json("No data");
  } else {
    const isuser = await users.findOne({ email });
    if (isuser) {
      res.json("User already registered");
    } else {
      users
        .create({ name, email, password: hashedpw })
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
    }
  }
});

app.listen(3000, () => {
  console.log("server is running");
});
