const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '',//enter your password here
  database: 'testdb'
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connection has been created');

  const createTableQuery = `create table Students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
  )`
  connection.execute(createTableQuery, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Table is created');
  });
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});