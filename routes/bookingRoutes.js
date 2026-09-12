const express = require('express');
const bookingController = require('../controller/bookingController');

const router = express.Router();

router.post('/Addbooking', bookingController.addBooking);

module.exports = router;