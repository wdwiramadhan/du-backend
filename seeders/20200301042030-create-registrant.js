const uuid = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Registrants', [
      {
        id: uuid(),
        name: "Ahmad",
        email: "ahmadhaqqi690@gmail.com",
        phone: "085842388969",
        socmed: "haqqer",
        class_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        name: "Boy",
        email: "boy@gmail.com",
        phone: "085842388868",
        socmed: "boy",
        class_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),        
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
