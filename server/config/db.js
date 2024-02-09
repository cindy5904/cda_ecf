const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("projects", "root", "Tabouret1", {
  host: "localhost",
  dialect: "mysql",
});

const User = require('../models/User')(sequelize);
const Project = require('../models/Project')(sequelize);
const Task = require('../models/Task')(sequelize);

User.hasMany(Project, { foreignKey: 'id_user' });
Project.belongsTo(User, { foreignKey: 'id_user' });

sequelize
  .sync({ force: false })
  .then(() => console.log("La base de données à bien été synchronisée"))
  .catch((error) =>
    console.error("Problème lors de la synchronisation :", error.message)
  );

module.exports = {
  sequelize,
  User,
  Project,
  Task
};