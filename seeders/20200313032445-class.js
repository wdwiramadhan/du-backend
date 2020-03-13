'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Classes', [
      {
        name: 'Web',
        capacity: 25,
        speaker: 'Boy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Android',
        capacity: 25,
        speaker: 'Novan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
