const mentorRouter = require("./Routes/MentorRouter");
const studentRouter = require("./Routes/StudentRouter");
require("./db/connection");
const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors()); /* To avoid cross origin error */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4100;

app.use("/Mentors", mentorRouter);
app.use("/Students", studentRouter);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => console.log(`Server started in the port ${PORT}`));
