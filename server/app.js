const express = require("express");
const DB = require("./config/db");
const userRoutes  = require('./router/userRoutes');
const projectRoutes = require('./router/projectRoutes');
const taskRoutes = require('./router/taskRoutes')
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.use('/api', userRoutes);
app.use('/project', projectRoutes);
app.use('/task', taskRoutes);


DB.sequelize
  .authenticate()
  .then(() => console.log("Connexion avec la base de données réussie"))
  .then(() => {
    app.listen(port, () => {
      console.log("http://localhost:", port);
    });
  })
  .catch((err) => {
    console.log(
      "Erreur lors de la connexion à la base de données",
      err.message
    );
  });

