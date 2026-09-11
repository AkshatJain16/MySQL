const express = require('express');
const db = require('./utils/db-connection');
const studentsRoutes = require('./routes/studentRoutes');


const studentModel = require('./models/students');
// const busRoutes  = require('./routes/busRoutes');
// const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// app.use("/students",studentsRoutes);
// app.use("/buses",busRoutes);
// app.use("/users", userRoutes);

db.sync({force:true}).then(()=>{
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