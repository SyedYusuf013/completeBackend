// Import the Mongoose library:
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load env config
dotenv.config();

// Create a connectDB as follows:
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
    
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

// Finally, export the connectDB function.

module.exports = connectDB;
