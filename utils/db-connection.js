const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Akj@2302',//enter your password here
  database: 'testdb'
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connection has been created');

  const createStudentTable = `create table IF NOT EXISTS Students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
  )`
  connection.execute(createStudentTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Student table is created');
  });
});

module.exports = connection;