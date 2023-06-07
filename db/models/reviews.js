"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    // static associate(models) {
    //   // define association here
    //   Reviews.belongsTo(models.listings);
    //   Reviews.belongsTo(models.users);
    // }
  }
  Reviews.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      author_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      star_rating: {
        allowNull: false,
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
      modelName: "reviews",
      underscored: true,
    }
  );
  return Reviews;
};
