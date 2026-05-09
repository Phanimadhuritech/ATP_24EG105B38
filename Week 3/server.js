//entry point of backend
import exp from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';

import { userApp } from '../APIs/UserAPI.js';
import { productApp } from './APIs/ProductAPI.js'; // ✅ added product API

//load env variables
config();

const app = exp();

//middlewares
app.use(exp.json());          //body parser
app.use(cookieParser());      //cookie parser

//routes
app.use('/user-api', userApp);
app.use('/product-api', productApp);  // ✅ important

//connect to DB and start server
async function connectDB() {
  try {
    await connect("mongodb://localhost:27017/my_database");
    console.log("Database connection successful");

    //start server ONLY here ✅
    app.listen(4000, () => {
      console.log("Server running on port 4000");
    });

  } catch (err) {
    console.log("Error in DB connection:", err);
  }
}

connectDB();

//global error handling middleware
app.use((err, req, res, next) => {
  console.log(err.name);

  //validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation Error",
      error: err.message
    });
  }

  //invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID",
      error: err.message
    });
  }

  //default server error
  res.status(500).json({
    message: "Server Error",
    error: err.message
  });
});