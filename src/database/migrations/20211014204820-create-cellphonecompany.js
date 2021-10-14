'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'companies',
      'cellphone',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('companies', "cellphone")
  }
};
