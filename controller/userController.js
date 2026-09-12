const User = require('../models/users');

//POST /users
const addUser = async (req, res) => {
    try {
        const {name, email} = req.body;

        await User.create({
            name: name,
            email: email
        });

        res.status(201).send(`User with name ${name} is created`);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Unable to create user');
    }
};

//GET /users
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).send(users);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Unable to get users');
    }
};

module.exports = {
    addUser,
    getUsers
};