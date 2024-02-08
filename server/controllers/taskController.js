const { Task } = require('../config/db');

exports.createTask = async (req, res) => {
    try {
        const { title, descriptions, priority, term, status } = req.body;
        if (!title) {
            return res.status(400).json({ message: "le titre est requis pour créer une tâche" })
        }

        const newTask = await Task.create({ title, descriptions, priority, term, status });

        res.status(201).json({ message: "La tâche a été créé avec succès", task: newTask});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création de la tâche" })
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des tâches"});
    }
};

exports.updateTask = async (req, res) => {
    try {
        console.log('Route updateTask atteinte');
        const { id_task } = req.params;
        const { updatedData } = req.body; 

        const task = await Task.findOne({ where: { id_task } });

        if (!task) {
            return res.status(404).json({ message: "Tâche non trouvé"});
        }
        await task.update(updatedData);
        res.json({ message: "Tâche mise à jour avec succès", task});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la mise à jour de la tâche" });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { id_task } = req.params;
    

        const task = await Task.findOne({ where: { id_task } });
        

        if (!task) {
            return res.status(404).json({ message: "Tâche non trouvé"});
        }
        await task.destroy();

        res.json({ message: "Tâche supprimée avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression de la tâche" });
    }
};