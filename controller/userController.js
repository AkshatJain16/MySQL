const User = require('../models/users');

//POST /users
const addUser = async (req, res) => {
    try {
        const {name, email} = req.body;

        const user = await User.create({
            name: name,
            email: email
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

//GET /users
// const getUsers = async (req, res) => {
//     try {
//         const users = await User.findAll();

//         res.status(200).send(users);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({error:error.message});
//     }
// };

module.exports = {
    addUser,
    //getUsers
};