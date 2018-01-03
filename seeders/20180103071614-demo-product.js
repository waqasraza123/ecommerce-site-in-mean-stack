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
    return queryInterface.bulkInsert('products', [{
      p_name: 'Product 1',
      p_image: 'pimage1.png',
      p_des: 'This is product 1 description.',
      p_price: '2344',
      category_id: 1
    },{
      p_name: 'Product 2',
      p_image: 'pimage2.png',
      p_des: 'This is product 2 description.',
      p_price: '234423',
      category_id: 1
    },{
      p_name: 'Product 3',
      p_image: 'pimage3.png',
      p_des: 'This is product 3 description.',
      p_price: '234',
      category_id: 1
    },{
      p_name: 'Product 1',
      p_image: 'pimage21.png',
      p_des: 'This is product 1 description.',
      p_price: '2342',
      category_id: 2
    },{
      p_name: 'Product 2',
      p_image: 'pimage22.png',
      p_des: 'This is product 2 description.',
      p_price: '2342',
      category_id: 2
    },{
      p_name: 'Product 3',
      p_image: 'pimage23.png',
      p_des: 'This is product 3 description.',
      p_price: '2342',
      category_id: 2
    },{
      p_name: 'Product 1',
      p_image: 'pimage31.png',
      p_des: 'This is product 1 description.',
      p_price: '2342',
      category_id: 3
    },{
      p_name: 'Product 2',
      p_image: 'pimage32.png',
      p_des: 'This is product 2 description.',
      p_price: '2342',
      category_id: 3
    },{
      p_name: 'Product 3',
      p_image: 'pimage33.png',
      p_des: 'This is product 3 description.',
      p_price: '2342',
      category_id: 3
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
    return queryInterface.bulkDelete('products', null, {});
  }
};
