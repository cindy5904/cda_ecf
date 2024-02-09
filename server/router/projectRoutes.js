const express = require('express');
const projectController = require('../controllers/projectController');
const isAuthenticated = require('../middleware/auth');

const router = express.Router();

router.post('/create', isAuthenticated, projectController.createProject);
router.get('/user/:userId', isAuthenticated, projectController.getAllProjects);
router.put('/update/:id_project', isAuthenticated, projectController.updateProject);
router.delete('/delete/:id_project',isAuthenticated, projectController.deleteProject);

module.exports = router;