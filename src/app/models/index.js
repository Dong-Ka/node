const Sequelize = require('sequelize');
const sequelize = require('../config/db'); // import đúng kết nối

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Example: import User model nếu có
db.User = require('./User')(sequelize, Sequelize.DataTypes);

module.exports = db;
