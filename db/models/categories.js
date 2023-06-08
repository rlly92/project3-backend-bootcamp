"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      // define association here

      Categories.belongsToMany(models.listings, {
        through: "listings_categories",
      });
    }
  }
  Categories.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "categories",
      underscored: true,
    }
  );
  return Categories;
};
