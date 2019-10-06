const express = require('express');

const {
  Trip, Gear, User, Location,
} = require('../model');

const tripController = express.Router();

tripController.get('/', async (req, res) => {
  try {
    const allTrip = await Trip.findAll({
      include: [
        Gear, Location,
      ],
    });
    res.json(allTrip);
  } catch (e) {
    res.status(500).send(e);
  }
});

tripController.put('/:tripid/gear/:gearid/', async (req, res) => {
  try {
    const tripGear = await Trip.findOne({
      where: { id: req.params.tripid },
      include: [
        User, Gear,
      ],
    });
    const gear = await Gear.findByPk(req.params.gearid);
    // update here
    await tripGear.addGear(gear);
    res.json(tripGear);
  } catch (e) {
    res.status(500).send(e);
  }
});

tripController.get('/:tripid/gear', async (req, res) => {
  try {
    const tripGear = await Trip.findOne({
      where: { id: req.params.tripid },
      include: [
        User, Gear,
      ],
    });
    // update here
    res.json(tripGear);
  } catch (e) {
    res.status(500).send(e);
  }
});

tripController.post('/', async (req, res) => {
  try {
    const tripGear = await Trip.create(req.body);
    // get the trip type from the id
    // associate trip with trip type
    res.json(tripGear);
  } catch (e) {
    res.status(500).send(e);
  }
});

tripController.delete('/:id', async (req, res, next) => {
  try {
    const trip = await Trip.findByPk(req.params.id);
    await trip.destroy();
  } catch (e) {
    next(e);
  }
});

tripController.get('/name/:id', async (req, res) => {
  try {
    const tripName = await Trip.findOne({
      where: {
        trip: req.params.id,
      },
    });
    res.json(tripName);
  } catch (e) {
    res.status(500).send(e);
  }
});

tripController.get('/name/:name', async (req, res) => {
  try {
    const find = await Trip.findOne({
      where: {
        gear: req.params.name,
      },
    });
    res.json(find);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
module.exports = tripController;

// const tripGear = await Trip.findByPk(req.params.tripid);
// const prevGear = await tripGear.getGears();
// const newGear = await Gear.findByPk(req.params.gearid);
// await tripGear.setGears([...prevGear, newGear]);
// res.json({ ...tripGear, gears: [...prevGear, newGear] });
