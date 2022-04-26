const { DataTypes } = require('sequelize');

const Attributes = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  recipeGuide: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  igredients: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  urlVideo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  urlImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  privatePost: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
};

module.exports = (sequelize, _DataTypes) => {
  const Recipes = sequelize.define('Recipes', 
  Attributes,
  { timestamps: false });

  Recipes.associate = (models) => {
    Recipes.belongsTo(models.User, { foreignKey: 'id', as: 'user' });
  };

  return Recipes;
};