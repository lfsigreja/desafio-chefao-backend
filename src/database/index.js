const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const File = require('../models/File')
const Gymnasium = require('../models/Gymnasium')
const Company = require('../models/Company')
const Structure = require('../models/Structure')

const connection = new Sequelize(dbConfig);

User.init(connection);
File.init(connection);
Gymnasium.init(connection);
Company.init(connection);
Structure.init(connection)

User.associate(connection.models)
Gymnasium.associate(connection.models);
Company.associate(connection.models);
Structure.associate(connection.models)

module.exports = connection;
