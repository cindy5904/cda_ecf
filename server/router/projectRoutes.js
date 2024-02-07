const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.post('/create', projectController.createProject);
router.get('/', projectController.getAllProjects);
router.put('/update/:id_project', projectController.updateProject);
router.delete('/delete/:id_project', projectController.deleteProject);

module.exports = router;