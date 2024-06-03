const verify = require("jsonwebtoken");
require("dotenv").config();

const validateToken = (req, res, next) => {
  const token = req.headers["auth-token"];
  if (!token) {
    res.status(401).send("Authentication failed");
  }
  try {
    const tok_data = verify(token, "Naveen@4");
    req.data = tok_data;
    next();
  } catch (err) {
    res.status(401).send("Authentication failed");
  }
};

module.exports = validateToken;
