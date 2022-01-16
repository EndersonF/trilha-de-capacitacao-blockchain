'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Notas', [{
          "title": "Ms",
          "description": "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo",
          "createdAt": new Date(),
          "updatedAt": new Date()
        }, {
          "title": "Mrs",
          "description": "blandit mi in porttitor pede justo eu massa donec dapibus",
          "createdAt": new Date(),
          "updatedAt": new Date()
        }, {
          "title": "Rev",
          "description": "convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis",
          "createdAt": new Date(),
          "updatedAt": new Date()
        }, {
          "title": "Mrs",
          "description": "lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget",
          "createdAt": new Date(),
          "updatedAt": new Date()
        }, {
          "title": "Honorable",
          "description": "vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi",
          "createdAt": new Date(),
          "updatedAt": new Date()
        }], 
        {});

  },

  down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Notas', null, {});
  }
};
