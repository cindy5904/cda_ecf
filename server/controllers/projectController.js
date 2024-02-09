const { Project } = require('../config/db');

exports.createProject = async (req, res) => {
    try {
        const { name_project, descriptions } = req.body;
        if (!name_project || !descriptions) {
            return res.status(400).json({ message: "le nom et la description sont requis pour créer un projet "})
        }
        const userId = req.auth.id_user;
        const newProject = await Project.create({ name_project, descriptions, id_user: userId  });
        res.status(201).json({ message: "Le projet a été créé avec succès", project: newProject});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création du projet"})
    }
};

exports.getAllProjects = async (req, res) => {
    try {
        // const projects = await Project.findAll();
        const userId = req.params.userId;

        const projects = await Project.findAll({ where: { id_user: userId } });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des projets"});
    }
};

exports.updateProject = async (req, res) => {
    try {
        const { id_project } = req.params;
        const { updatedData } = req.body; 

        const project = await Project.findOne({ where: { id_project } });

        if (!project) {
            return res.status(404).json({ message: "Projet non trouvé"});
        }
        await project.update(updatedData);
        res.json({ message: "Projet mis à jour avec succès", project});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la mise à jour du projet" });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const { id_project } = req.params;
    

        const project = await Project.findOne({ where: { id_project } });
        

        if (!project) {
            return res.status(404).json({ message: "Projet non trouvé"});
        }
        await project.destroy();

        res.json({ message: "Projet supprimé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression du projet" });
    }
};


