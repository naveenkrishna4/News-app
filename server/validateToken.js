const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function validateToken(req, res, next) {
  const token = req.header.authorization;
  console.log(token);
  try {
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) {
        return res.json("Invalid token");
      }
      req.user = user;
      next();
    });
  } catch (err) {
    console.log(err);
  }
}
module.exports = validateToken;
