'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'photo_id',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: "files", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', "photo_id")
  }
};
