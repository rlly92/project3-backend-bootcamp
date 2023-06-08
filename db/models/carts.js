"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    //   Carts.hasMany(models.listings);
    //   Carts.belongsTo(models.users);
    // }
  }
  Carts.init(
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
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "carts",
      underscored: true,
    }
  );
  return Carts;
};
