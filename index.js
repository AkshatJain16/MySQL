const express = require('express');
const mysql = require('mysql2');
const app = express();

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

  const createUserTable = `create table Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
  )`
  connection.execute(createUserTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(' User table is created');
  });

  const createBusesTable = `create table Buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(255),
    totalSeats INT,
    availableSeats INT
  )`
  connection.execute(createBusesTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(' Bus table is created');
  });

  const createBookingTable = `create table Bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
  )`
  connection.execute(createBookingTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(' Booking table is created');
  });

  const createPaymentsTable = `create table Payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid DECIMAL(10, 2),
    paymentStatus VARCHAR(255)
  )`
  connection.execute(createPaymentsTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(' Payments table is created');
  });
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});