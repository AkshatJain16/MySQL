const mysql = require('mysql2');

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

  const createStudentTable = `create table IF NOT EXISTS Students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    age INT
  )`;
  connection.execute(createStudentTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Student table is created');
  });

  const createUserTable = `create table IF NOT EXISTS Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
  )`
  connection.execute(createUserTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('User table is created');
  });

  const createBusTable = `create table IF NOT EXISTS Buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(255),
    totalSeats INT,
    availableSeats INT
  )`
  connection.execute(createBusTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Buses table is created');
  });

  const createBookingTable = `create table IF NOT EXISTS Bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
  )`
  connection.execute(createBookingTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Bookings table is created');
  });

  const createPaymentTable = `create table IF NOT EXISTS Payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid DECIMAL(10, 2),
    paymentStatus VARCHAR(255)
  )`
  connection.execute(createPaymentTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Payment table is created');
  });
});

module.exports = connection;