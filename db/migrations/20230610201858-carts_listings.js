"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("carts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      listing_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "listings",
          key: "id",
        },
      },
      cart_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "carts",
          key: "id",
        },
      },
      added_quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      subtotal_price: {
        allowNull: false,
        type: Sequelize.INTEGER,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("carts_listings");
  },
};
