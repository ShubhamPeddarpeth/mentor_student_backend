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

const PORT = process.env.PORT || 4100;

app.get("/", (req, res) =>
  res.send(`
<div>
<p> In Home Page </p>
<p>To get all mentor List - https://mentor-student-backend-d58b.onrender.com/Mentors </p>
<br>
<p>To get all Students List - https://mentor-student-backend-d58b.onrender.com/Students </p>
<br>
<p>To get mentor based on ID - https://mentor-student-backend-d58b.onrender.com//Mentors/get-mentor/:id<p>
<p>sample - https://mentor-student-backend-d58b.onrender.com//Mentors/get-mentor/60e7f515d5ff5342a06652e3 </p>

<p> To test Post and update - visit Frontend page of the application - https://shubhampeddarpeth.github.io/mentor_student_frontend/ </p>
</div>
`)
);

app.use("/Mentors", mentorRouter);
app.use("/Students", studentRouter);

app.listen(PORT, () => console.log(`Server started in the port ${PORT}`));
