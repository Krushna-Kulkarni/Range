const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb connected at ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error}`);
    process.exit();
  }
};

module.exports = connectDB;
