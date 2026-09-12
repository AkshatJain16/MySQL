const Bus = require('../models/buses');

//POST /buses
const addBus = async (req, res) => {
    try {
        const {BusNumber, totalSeats, availableSeats} = req.body;

        await Bus.create({
            BusNumber: BusNumber,
            totalSeats: totalSeats,
            availableSeats: availableSeats
        });

        res.status(201).send(`Bus with number ${BusNumber} is created`);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
};

//GET /buses/available/:seats
const getAvailableBuses = async (req, res) => {
    try {
        const {seats} = req.params;

        const buses = await Bus.findAll({
            where: {
                availableSeats: {
                    [require('sequelize').Op.gt]: seats
                }
            }
        });

        if (buses.length === 0) {
            res.status(404).send('No buses found');
            return;
        }

        res.status(200).send(buses);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
};

module.exports = {
    addBus,
    getAvailableBuses
};