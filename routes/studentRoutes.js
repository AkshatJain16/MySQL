const express = require('express');
const studentController = require('../controller/studentController');
const router = express.Router();

router.post("/add", studentController.addEntries);

router.get('/', studentController.getEntries);

router.get('/:id', studentController.getEntry);

router.put("/update/:id", studentController.updateEntry);

router.delete("/remove/:id", studentController.deleteEntry);

module.exports = router;