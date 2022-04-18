"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("atendentes", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      funcao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carga: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("atendentes");
  },
};
