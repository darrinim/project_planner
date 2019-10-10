const express = require('express');

const { Project, Timeline } = require('../model');

const projectController = express.Router();

//
projectController.get('/:projectId', async (req, res) => {
  try {
    const projects = await Project.findOne(
      {where: { id: req.params.projectId },
      include: [Timeline]
    });
    res.json(projects);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//  find all projects by one user
projectController.get('/user/:userId', async (req, res) => {
  try {
    const projects = await Project.findAll({where: { user_id: req.params.userId }});
    res.json(projects);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// create new project
projectController.post('/user/:userId', async (req, res) => {
  try {
    req.body.user_id = req.params.userId
    const project = await Project.create(req.body);
    res.json(project);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});


projectController.put('/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    await project.update(req.body);
    res.json(project);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

projectController.delete('/user/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    await project.destroy();
    res.json(project);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = projectController;
