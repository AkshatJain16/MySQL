const express = require('express');
const router = express.Router();

const busController = require('../controller/busController');

router.get('/available/:seats', busController.getAvailableBuses);
router.post('/addBus', busController.addBus);

module.exports = router;