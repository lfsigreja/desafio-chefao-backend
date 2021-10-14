'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return (
      queryInterface.addColumn(
      'company_structure',
      'item',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      )
    )
      queryInterface.dropTable('structures')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usestructuresrs');
  }
};
