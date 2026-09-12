const express = require('express');
const db = require('./utils/db-connection');
const studentsRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoute');
const studentCourseRoutes = require('./routes/studentCourseRoutes');
// const busesRoutes = require('./routes/busRoutes');
// const usersRoutes = require('./routes/userRoutes');

//models
require('./models'); //imported every model in models

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use("/students",studentsRoutes);
app.use('/courses', courseRoutes);
app.use('/studentCourse',studentCourseRoutes);
// app.use("/buses",busesRoutes);
// app.use("/users", usersRoutes);

db.sync().then(()=>{
  app.listen(3000, (err)=>{
    console.log("Server is running");
  })
})
.catch((err)=>{
  console.log(err);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});