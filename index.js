const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://monu746monu_db_user:YNXAHMJnvWTnqJck@cluster0.3tbydjq.mongodb.net/"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Error:", error);
    process.exit(1);
  }
};

connectDB();