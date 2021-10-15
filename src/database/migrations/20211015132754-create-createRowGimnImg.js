'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'gymnasium',
      'image',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('gymnasium', 'image');
  }
};
