'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('product', {
    p_name: DataTypes.STRING,
    p_image: DataTypes.STRING,
    p_des: DataTypes.STRING,
    p_price: DataTypes.INTEGER,
    c_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return product;
};