"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // define association here
      Users.hasMany(models.listings);
      Users.hasMany(models.reviews);
      Users.hasMany(models.carts);
    }
  }
  Users.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },

      first_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      last_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phone_number: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      buyer_address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      seller_address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "users",
      underscored: true,
    }
  );
  return Users;
};
