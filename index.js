const mentorRouter = require("./Routes/MentorRouter");
const studentRouter = require("./Routes/StudentRouter");
require("./db/connection");
const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

app.use(cors()); /* To avoid cross origin error */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4100;

app.get("/", (req, res) =>
  res.send(`
<div>
<p> In Home Page </p>
<br>
<p>To get all mentor List -/Mentors </p>
<br>
<p>To get all Students List -/Students </p>
<br>
<p>To get mentor based on ID - /Mentors/get-mentor/:id<p>
</div>
`)
);

app.use("/Mentors", mentorRouter);
app.use("/Students", studentRouter);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => console.log(`Server started in the port ${PORT}`));
