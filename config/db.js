const config = require("./index");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB name " + conn.connection.name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
