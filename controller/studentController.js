const db = require('../utils/db-connection');

//Add Students
const addEntries = (req, res) => {
    const {email, name,age} = req.body;
    const insertQuery = `INSERT INTO students (email,name,age) VALUES (?,?, ?)`;

    db.execute(insertQuery,[email,name,age], (err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        console.log("Value has been inserted");
        res.status(200).send(`Student with name ${name} sucessfully added`);
    })
};

//GET all students information
const getEntries = (req,res)=>{
    const selectQuery = `SELECT * FROM students`;

    db.execute(selectQuery, (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).send(result);
    });
};

// GET student by id
const getEntry = (req, res) => {
    const { id } = req.params;

    const selectQuery = `SELECT * FROM students WHERE id = ?`;

    db.execute(selectQuery, [id], (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }

        if (result.length === 0) {
            res.status(404).send("Student not found");
            return;
        }

        res.status(200).send(result[0]);
    });
};

//Update student information
const updateEntry = (req,res)=>{
    const {id} = req.params;
    const {email, name, age} = req.body;

    const updateQuery = `UPDATE students SET email= ?, name = ?, age = ? WHERE id = ?`;

    db.execute(updateQuery,[email, name, age, id],(err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send("Student Not found");
            return;
        }

        res.status(200).send("User has been updated");
    })
};

//DELETE user by id
const deleteEntry = (req,res)=>{
    const {id} = req.params;

    const deleteQuery = `DELETE FROM students WHERE id = ?`;

    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send("Student not found");
            return;
        }
        res.status(200).send(`User with id ${id} is deleted`);
    })
}



module.exports = {
  addEntries,
  getEntries,
  getEntry,
  updateEntry,
  deleteEntry
};