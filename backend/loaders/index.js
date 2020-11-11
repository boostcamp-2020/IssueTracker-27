const expressLoader = require('./express');
const sequelizeLoader = require('./sequelize');

const loaders = (app) => {
  expressLoader(app);
  sequelizeLoader(app);
};

module.exports = loaders;
