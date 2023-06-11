"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Listings extends Model {
    static associate(models) {
      // define association here

      // Listings.belongsTo(models.carts);
      Listings.belongsTo(models.users);
      Listings.belongsToMany(models.categories, {
        through: "listings_categories",
      });
      Listings.belongsToMany(models.carts, {
        through: "carts_listings",
      });
    }
  }
  Listings.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      shipping_detail: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      sku_number: {
        allowNull: false,

        type: DataTypes.STRING,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      photo_url_1: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      photo_url_2: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      photo_url_3: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "listings",
      underscored: true,
    }
  );
  return Listings;
};
