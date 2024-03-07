var jwt = require("jsonwebtoken");
require("dotenv").config();

const validateToken = (req, res, next) => {
  const token = req.headers["auth-token"];
  if (!token) {
    res.status(401).send("Authentication failed");
  }
  try {
    const tok_data = jwt.verify(token, process.env.JWT_KEY);
    req.data = tok_data;
    next();
  } catch (err) {
    res.status(401).send("Authentication failed");
  }
};

module.exports = validateToken;
