const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const MONGODB_URL = process.env.URL;
//mongodb+srv://shubhampeddarpeth:<password>@mentor-student-db.yx0xm0f.mongodb.net/
mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
const connection = mongoose.connection;
