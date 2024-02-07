const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const User = sequelize.define('User', {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_project: {
      type: DataTypes.INTEGER,
      allowNull: true, 
      references: {
        model: 'Project', 
        key: 'id_project',
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    
    freezeTableName: true,
    timestamps: false,
  });
  return User;
}
