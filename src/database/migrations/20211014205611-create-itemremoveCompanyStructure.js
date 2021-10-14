'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('company_structure', "item")
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'company_structure',
      'item',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
    )

  }
};
