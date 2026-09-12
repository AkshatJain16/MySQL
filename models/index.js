const Student = require('./students');
const IdentityCard = require('./identityCard');
const Course = require('./course');
const studentCourses = require('./studentCourses');

//one to one
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//one to many
Student.hasMany(Course);
Course.belongsTo(Student);

//many to many
Student.belongsToMany(Course,{through:studentCourses});
Course.belongsToMany(Student,{through:studentCourses});

module.exports = {
    Student,
    IdentityCard,
    Course,
    studentCourses
}