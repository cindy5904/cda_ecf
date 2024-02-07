const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Task = sequelize.define('Task', {
        id_task: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        descriptions: {
          type: DataTypes.TEXT,
          allowNull: true, 
        },
        priority: {
          type: DataTypes.STRING,
          allowNull: true, 
        },
        term: {
          type: DataTypes.DATE,
          allowNull: true, 
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      }, {
        
        freezeTableName: true,
        timestamps: false, 
      });
      return Task;
}