"use strict";

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("gymnasium_img", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      gymnasium_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "gymnasium", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      img: {
        type: sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("gymnasium_img");
  },
};
