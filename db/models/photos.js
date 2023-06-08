"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Photos extends Model {
    static associate(models) {
      // define association here
      Photos.belongsTo(models.listings);
    }
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
        unique: true,
        type: DataTypes.STRING,
      },

      listing_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "listings",
          key: "id",
        },
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
