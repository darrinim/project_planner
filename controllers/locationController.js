const { Router } = require('express');

const { Location } = require('../model');
// check above if it doesn't work

const locationController = Router();

locationController.get('/', async (req, res, next) => {
  try {
    const location = await Location.findAll();
    res.json(location);
  } catch (e) {
    next(e);
  }
});

locationController.get('/:id', async (req, res, next) => {
  try {
    const location = await Location.findByPk(req.params.id);
    res.json(location);
  } catch (e) {
    next(e);
  }
});

module.exports = locationController;
