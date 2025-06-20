'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Nguyen Van A',
        email: 'nguyenvana@example.com',
        password: '123456',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Tran Thi B',
        email: 'tranthib@example.com',
        password: 'abcdef',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
