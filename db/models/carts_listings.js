"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Carts_Listings extends Model {
    static associate(models) {
      // define association here
      Carts_Listings.belongsTo(models.carts);
      Carts_Listings.belongsTo(models.listings);
    }
  }
  Carts_Listings.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      listing_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "listings",
          key: "id",
        },
      },
      cart_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "carts",
          key: "id",
        },
      },
      added_quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      subtotal_price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "carts_listings",
      underscored: true,
    }
  );
  return Carts_Listings;
};
