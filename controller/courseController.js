const Course = require('../models/course');

const addCourse = async(req, res)=>{
    try {
        const {courseName} = req.body;
        const course = await Course.create({'courseName':courseName});

        res.json(course);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

module.exports = {
    addCourse
};