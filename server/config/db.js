const { Sequelize } = require("sequelize");

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
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