const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) res.status(401).send("Authentication failed");
  const user = jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) res.status(401).send("Authentication failed");
    req.data = user;
    next();
  });
};

module.exports = validateToken;
