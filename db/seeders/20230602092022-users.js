"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        email: "tom@tom.com",
        password: "123",
        first_name: "Tom",
        last_name: "Jones",
        phone_number: 12345,
        buyer_address: "123 Lane",
        seller_address: "321 Lane",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: "dick@dick.com",
        password: "123",
        first_name: "Dick",
        last_name: "Nelson",
        phone_number: 67890,
        buyer_address: "456 Ave",
        seller_address: "654 Ave",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: "harry@harry.com",
        password: "123",
        first_name: "Harry",
        last_name: "Smith",
        phone_number: 56473,
        buyer_address: "789 Ave",
        seller_address: "987 Ave",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
