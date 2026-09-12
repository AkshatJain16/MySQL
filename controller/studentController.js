const db = require('../utils/db-connection');
const Student = require('../models/students');
const IdentityCard = require('../models/identityCard');
const Course = require('../models/course');

//Add Students
const addEntries =async (req, res) => {
    try {
        const {email, name,age} = req.body;
        const student = await Student.create({
            email:email,
            name:name,
            age:age
        });
        res.status(201).send(`User with name ${name} is created`);
    } catch (error) {
        res.status(500).send('Unable to make an entry.')
    }
};

//GET all students information
const getEntries = async(req,res)=>{
    try {
        const students = await Student.findAll();

        res.status(200).send(students);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Unable to get students.');
    }
}

// GET student by id
const getEntry = async(req, res) => {
    try {
        const { id } = req.params;

        const student = await Student.findByPk(id);

        if (!student) {
            res.status(404).send("Student not found");
            return;
        }

        res.status(200).send(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Unable to get student.');
    }
};

//Update student information
const updateEntry = async(req,res)=>{
    try {
        const {id} = req.params;
        const {email, name, age} = req.body;

        const student = await Student.findByPk(id);

        if (!student) {
            res.status(404).send("Student not found");
            return;
        }

        await student.update({
            email: email,
            name: name,
            age: age
        });

        res.status(200).send("Student has been updated");
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Unable to update student.');
    }
};

//DELETE user by id
const deleteEntry = async(req,res)=>{
    try {
        const {id} = req.params;

        const student = await Student.findByPk(id);

        if (!student) {
            res.status(404).send("Student not found");
            return;
        }

        await student.destroy();

        res.status(200).send(`Student with id ${id} is deleted`);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Unable to delete student.');
    }
}

const addingValuesToStudentAndIdentityTable = async(req,res)=>{
    try {
        const student = await Student.create(req.body.students);
        const idCard = await IdentityCard.create({
            ...req.body.IdentityCard,
            StudentId: student.id
        })

        res.status(201).json({student, idCard});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const addingValuesToStudentAndCourseTable = async(req,res)=>{
    try {
        const student = await Student.create(req.body.students);

        const courses = [];

        for(let i = 0; i < req.body.courses.length; i++){

            const course = await Course.create({
                ...req.body.courses[i],
                StudentId: student.id
            });

            courses.push(course);
        }

        res.status(201).json({student, courses});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


module.exports = {
  addEntries,
  getEntries,
  getEntry,
  updateEntry,
  deleteEntry, 
  addingValuesToStudentAndIdentityTable,
  addingValuesToStudentAndCourseTable
};