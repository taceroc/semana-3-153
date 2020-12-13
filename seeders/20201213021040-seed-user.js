'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{
      name: 'carlos',
      email: 'ejemplo@gmail.com',
      password: '$2y$08$oGvL0wFSjKmRB7PBwpuJ8OJq/c/iN8hBTdzkwp5zrjPOI5jZqoW7O',
      createdAt: new Date(),
      updatedAt: new Date()
      }]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {});

  }
};
