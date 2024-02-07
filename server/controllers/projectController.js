const { Project } = require('../config/db');

exports.createProject = async (req, res) => {
    try {
        const { name_project, descriptions } = req.body;
        if (!name_project || !descriptions) {
            return res.status(400).json({ message: "le nom et la description sont requis pour créer un projet "})
        }

        const newProject = await Project.create({ name_project, descriptions });

        res.status(201).json({ message: "Le projet a été créé avec succès", project: newProject});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création du projet"})
    }
};

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des projets"});
    }
};

exports.updateProject = async (req, res) => {
    try {
        const { id_project } = req.params;
        const { updatedData } = req.body; 

        const project = await Project.findOne({ id: id_project }, { where: { id_project } });

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

// exports.deleteProject = async (req, res) => {
//     try {
//         const { id_project } = req.params;
//         const project = await Project.findOne({ where: { id_project } });

//         if (!project) {
//             return res.status(404).json({ message: "Projet non trouvé"});
//         }
//         await project.destroy();

//         res.json({ message: "Projet supprimé avec succès" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Erreur lors de la suppression du projet" });
//     }
// };
exports.deleteProject = async (req, res) => {
    try {
        const { id_project } = req.params;
        console.log('ID_PROJECT:', id_project);

        const project = await Project.findOne({ where: { id_project } });
        console.log('PROJECT:', project);

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


