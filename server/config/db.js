const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("projects", "root", "Tabouret1", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .sync({ force: false })
  .then(() => console.log("La base de données à bien été synchronisée"))
  .catch((error) =>
    console.error("Problème lors de la synchronisation :", error.message)
  );

module.exports = {
  sequelize
   
};