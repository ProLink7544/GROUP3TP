const express = require('express');
const Race = require('../MODEL/model');

const router = express.Router();

module.exports = router;

// create a new record and save
router.post('/new', async (req, res) => {
    const data = new Races({
        name: req.body.name,
        vehicle: req.body.vehicle,
        number: req.body.number,
        wins: req.body.wins,
    });
    try {
        console.log("trying to post")
        //insert a racing vehicle
        const savedData = await data.save();
        res.status(200).json(savedData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Read a race data for particular race car
router.get('/fetch', async (req, res) => {
console.log("we are here")
    try {
        console.log("trying to fecth")
        const data = await Races.find();
        console.log(data)
        res.status(200).json(data);
    } catch (error) {
        console.log("error")
        res.status(404).json({ message: error.message });
    }
});

// Update vehicle won races and current driver
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const data = await Races.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// D - Soft delete vehicle history
router.delete('/id', async (req, res) => {
    try {
        const id = req.params.id;

        const data = await Races.findByIdAndDelete(id);
        res.status(200).json({ message: `The Race named ${data.name} has been deleted` });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
