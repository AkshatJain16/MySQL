const { Student, Course } = require('../models');

const addStudentCourses = async(req,res)=>{
    try {

        const student = await Student.findByPk(req.body.studentId);

        const courses = await Course.findAll({
            where:{
                id: req.body.courseIds
            }
        });

        await student.addCourses(courses);

        res.status(201).json({
            message: "Courses added to student successfully"
        });

    } catch (error) {
        res.status(500).json({
            error:error.message
        });
    }
}

module.exports = {
    addStudentCourses
};