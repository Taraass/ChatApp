'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init(
    {
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: "Must be a valid address"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};