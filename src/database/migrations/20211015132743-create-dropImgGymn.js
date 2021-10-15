'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('gymnasium_img');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gymnasium_img', { id: Sequelize.INTEGER });
  }
};
