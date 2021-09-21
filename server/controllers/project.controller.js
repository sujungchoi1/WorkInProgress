// const mongoose = require("mongoose");
const Project = require('../models/project.model');
const db = require('../db/connection');

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// module.exports.createProject = (req, res) => {
//     // const { name } = req.body;
//     Author.create(req.body)
//         .then(author => res.json(author))
//         .catch(err => res.status(400).json(err));
// }

const createProject = async (req, res) => {
    try {
      const project = await Project.create(req.body);
      res.json(project);
    } catch (error) {
      res.status(500).json(error);
      // res.status(500).json({ error: error.message });
    }
}

const findAllProjects = async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const findOneProject = async (req, res) => {
    try {
      const { id } = req.params;
      const project = await Project.findById(id);
      if (project) {
        return res.json(project);
      }
      res.status(404).json({ message: "project not found" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const updateProject = async (req, res) => {
    const { id } = req.params;
    await Project.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (error, project) => {
        if (error) {
          return res.status(500).json({ error: error.message });
        }
        if (!project) {
          return res.status(404).json({ message: "Project not found!" });
        }
        res.status(200).json(project);
      }
    );
  };
  
  const deleteProject = async (req, res) => {
    try {
      const { id } = req.params;
      const toBeDeleted = await Project.findByIdAndDelete(id);
      if (toBeDeleted) {
        return res.status(200).send("Project deleted");
      }
      throw new Error("Project not found");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
module.exports = {
    findAllProjects,
    createProject,
    findOneProject,
    updateProject,
    deleteProject,
  };
