const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config');

const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  config[env],
  config.common, 
  {
    pool: {
      max: 5,
      min: 0,
    },
    query: {
      raw: true,
    },
  }
);

const db = fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .reduce((total, file) => {
    const [filename] = file.split(".");
    total[filename] = require(path.join(__dirname, file));
    return total;
  }, {});

const Models = Object.keys(db);

Models.forEach((model) => {
  if (db[model].init) db[model].init(sequelize);
});
  
Models.forEach((model) => {
  if (db[model].associate) db[model].associate(db);
});

module.exports = sequelize;