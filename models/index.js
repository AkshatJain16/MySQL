// const Student = require('./students');
// const IdentityCard = require('./identityCard');
// const Course = require('./course');
// const studentCourses = require('./studentCourses');

// //one to one
// Student.hasOne(IdentityCard);
// IdentityCard.belongsTo(Student);

// //one to many
// Student.hasMany(Course);
// Course.belongsTo(Student);

// //many to many
// Student.belongsToMany(Course,{through:studentCourses});
// Course.belongsToMany(Student,{through:studentCourses});

// module.exports = {
//     Student,
//     IdentityCard,
//     Course,
//     studentCourses
// }

const User = require('../models/users');
const Bus = require('../models/buses');
const Booking = require('../models/bookings');

User.hasMany(Booking, {
    foreignKey: 'userId'
});

Booking.belongsTo(User, {
    foreignKey: 'userId'
});

Bus.hasMany(Booking, {
    foreignKey: 'busId'
});

Booking.belongsTo(Bus, {
    foreignKey: 'busId'
});

module.exports = {
    User,
    Bus,
    Booking
};