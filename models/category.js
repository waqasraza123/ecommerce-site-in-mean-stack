'use strict';
module.exports = (sequelize, DataTypes) => {
  var category = sequelize.define('category', {
    cat_name: DataTypes.STRING,
    cat_image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return category;
};