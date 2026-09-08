const db = require('../utils/db-connection');

const getBus = (req,res)=>{
    const {seats} = req.params;
    const selectQuery = `SELECT * from buses WHERE availableSeats > ?`;

    db.execute(selectQuery, [seats], (err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        if(result.length === 0){
            res.status(404).send("No bus found with the required available seats");
            return;
        }
        res.status(200).send(result);
    })
};

const addBus = (req,res)=>{
    const {busNumber, totalSeats, availableSeats} = req.body;
    const addQuery = `INSERT INTO buses (busNumber,totalSeats,availableSeats) VALUES(?,?,?)`;

    db.execute(addQuery, [busNumber, totalSeats, availableSeats],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).send("Bus added successfully");
    })
}

module.exports = {
    getBus,
    addBus
}