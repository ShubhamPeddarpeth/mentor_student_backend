const mentorRouter = require("./Routes/MentorRouter");
const studentRouter = require("./Routes/StudentRouter");
require("./db/connection");
const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
const corsOptions = {
  origin: "http://frontend-domain.com", // Replace with your frontend domain
  methods: ["GET", "POST", "PATCH", "DELETE"], // Allow only specific HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow only specific headers
};
app.use(cors(corsOptions)); /* To avoid cross origin error */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4100;

app.use("/Mentors", mentorRouter);
app.use("/Students", studentRouter);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => console.log(`Server started in the port ${PORT}`));
