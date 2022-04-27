module.exports = (sequelize, _DataTypes) => {
    const Favorites = sequelize.define('Favorites', {},
    { timestamps: false });
  
    Favorites.associate = (models) => {
      models.User.belongsToMany(models.Recipes, {
        as: 'recipesFav',
        through: Favorites,
        foreignKey: 'user_id',
        otherKey: 'recipes_id',
      });
      models.Recipes.belongsToMany(models.User, {
        as: 'userFav',
        through: Favorites,
        foreignKey: 'recipes_id',
        otherKey: 'user_id',
      });
    };
    return Favorites;
  };