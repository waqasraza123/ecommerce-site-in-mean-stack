'use strict';
module.exports = (sequelize, DataTypes) => {
  var cart = sequelize.define('cart', {
    cart_key: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cart;
};