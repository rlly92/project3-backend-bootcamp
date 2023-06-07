"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("listings", [
      {
        user_id: 1,
        title: "Brand New Sofa",
        price: 100,
        description: "Very soft very nice",
        shipping_detail: "By lorry",
        sku_number: "SOFA_12345",
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        title: "Water Bottle",
        price: 5,
        description: "Very big very sturdy",
        shipping_detail: "By car",
        sku_number: "WB_12345",
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        title: "Electric Guitar",
        price: 1000,
        description: "Sounds good such Rock n Roll many nice",
        shipping_detail: "By air freight",
        sku_number: "WB_12345",
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("listings", null, {});
  },
};
