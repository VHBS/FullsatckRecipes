module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Favorites', {
        recipesId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Recipes',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
        },
      });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.dropTable('Favorites');
    },
  };