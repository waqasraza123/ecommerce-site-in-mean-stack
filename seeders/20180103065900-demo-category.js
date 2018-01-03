'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('categories', [{
      cat_name: 'category 1',
      cat_image: 'image1.png'
    },{
      cat_name: 'category 2',
      cat_image: 'image2.png'
    },{
      cat_name: 'category 3',
      cat_image: 'image3.png'
    },{
      cat_name: 'category 4',
      cat_image: 'image4.png'
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('categories', null, {});
  }
};
