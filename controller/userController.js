const e = require('express');
const db = require('../utils/db-connection');

const getAllUsers = (req,res)=>{
    const selectAllQuery = `SELECT * FROM users`;

    db.execute(selectAllQuery, (err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).send(result);
    })
};

const addUser = (req,res)=>{
    const {name, email} = req.body;

    const addQuery = `INSERT INTO users (name, email) VALUES (?,?)`;

    db.execute(addQuery, [name,email],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).send("User has been added");
    })

}

module.exports = {
    getAllUsers,
    addUser
}