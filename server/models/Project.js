const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Project = sequelize.define('Project', {
        id_project: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_task: {
          type: DataTypes.INTEGER,
          allowNull: true, 
          references: {
            model: 'Task',
            key: 'id_task',
          },
        },
        name_project: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        descriptions: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      }, {
       
        freezeTableName: true,
        timestamps: false, 
      });
      return Project;
}