"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Photos extends Model {
    // static associate(models) {
    //   // define association here
    //   Photos.belongsTo(models.listings);
    // }
  }
  Photos.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      url_link: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      photo_order: {
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
      modelName: "photos",
      underscored: true,
    }
  );
  return Photos;
};
