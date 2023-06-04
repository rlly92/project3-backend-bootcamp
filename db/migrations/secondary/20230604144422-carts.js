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

      // IS THIS NECESSARY?:
      // price: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      // },
      // quantity: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      // },
      // shipping_cost: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      // },
      // total_price: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      // },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
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
    await queryInterface.dropTable("carts");
  },
};
