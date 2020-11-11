const { sequelize } = require('../models');

const sequelizeLoader = () => {
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log('DB 연결 성공');
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = sequelizeLoader;
