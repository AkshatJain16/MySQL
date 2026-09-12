const Student = require('./students');
const IdentityCard = require('./identityCard');
const Course = require('./course');

//one to one
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//one to many
Student.hasMany(Course);
Course.belongsTo(Student);

module.exports = {
    Student,
    IdentityCard,
    Course
}