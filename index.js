const express = require('express');
const studentsRoutes = require('./routes/studentRoutes');
const busRoutes  = require('./routes/busRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use("/students",studentsRoutes);
app.use("/buses",busRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});