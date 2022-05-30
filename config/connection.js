require('dotenv').config();

const Sequelize = require('sequelize');
const seedTags = require('../seeds/tag-seeds');

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001,
        dialectOptions: {
            decimalNumbers: true,
            connectTimeout: 60000
        },
    });

module.exports = sequelize;
