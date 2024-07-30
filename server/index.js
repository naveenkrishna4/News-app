const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const connectdb = require("./config/dbconnect");
const users = require("./model/usermodel");
const dotenv = require("dotenv");
const axios = require("axios");
const validateToken = require("./validateToken");

dotenv.config();

connectdb();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://news4u-client.onrender.com",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email });
    if (user) {
      const pass = await bcrypt.compare(password, user.password);
      if (!pass) {
        return res.json({ msg: "Incorrect email or password", token: "" });
      } else {
        const token = jwt.sign(
          { email: user.email, id: user._id },
          process.env.JWT_KEY,
          {
            expiresIn: "1h",
          }
        );
        res.json({ msg: "", token: token });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
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

app.post("/update", validateToken, async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json("No data");
  } else {
    const hashedpw = await bcrypt.hash(password, 10);
    const user = await users.findOne({ email });
    const updateResult = await users.updateOne(user, {
      $set: { name: name, password: hashedpw },
    });
    console.log(updateResult);
    res.json(updateResult);
  }
});

app.get("/news", async (req, res) => {
  const { url } = req.query;
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news data:", error);
    res.status(500).json({ error: "Failed to fetch news data" });
  }
});

app.listen(3000, () => {
  console.log("server is running");
});
