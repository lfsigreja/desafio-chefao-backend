'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('structures');
  },

  down: async (queryInterface, Sequelize) => {
  }
};
