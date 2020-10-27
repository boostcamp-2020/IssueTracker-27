const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize){
    return super.init({
      username: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      profileImage: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      githubToken: {
        type: Sequelize.STRING(100),
        allowNull: true,
      }
    }, {
      sequelize,
      modelName: 'User',
      tableName: 'user',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    this.hasMany(db.joinUser, {
      foreignKey: {field: 'userId', allowNull: false},
      sourceKey: 'id',
    });
    this.hasMany(db.issueTracker, {
      foreignKey: {field: 'userId', allowNull: false},
      sourceKey: 'id',
    });
  }
}