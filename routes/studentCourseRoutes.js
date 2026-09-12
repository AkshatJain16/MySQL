const express = require('express');

const studentCourseController = require('../controller/studentCourseController');

const router = express.Router();

router.post('/addStudentCourses', studentCourseController.addStudentCourses);

module.exports = router;