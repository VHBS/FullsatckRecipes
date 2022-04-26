const { DataTypes } = require('sequelize');

const Attributes = {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  secretQuestion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
  }
};

module.exports = (sequelize, _DataTypes) => {
  const User = sequelize.define('User', 
  Attributes,
  { timestamps: false });

  User.associate = (models) => {
    User.hasMany(models.Recipes,
      { foreignKey: 'userId', as: 'recipes' });
    };
  return User;
};