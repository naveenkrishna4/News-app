const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://naveen:Naveen%404@cluster0.phxdsi6.mongodb.net/news-app-users"
    );
    console.log(
      "Database connected.",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectdb;
