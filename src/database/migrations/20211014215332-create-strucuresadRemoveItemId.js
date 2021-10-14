'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('company_structure', "item_id")
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'company_structure',
      'item_id',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: "structures", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
    )
  }
};
