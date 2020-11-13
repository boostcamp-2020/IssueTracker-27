const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
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
        },
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'user',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        hooks: {
          afterCreate: (user) => {
            sequelize.models.JoinUser.create({
              issueTrackerId: 1,
              userId: user.id,
            });
          },
        },
      }
    );
  }

  static associate(db) {
    this.hasMany(db.joinUser, {
      foreignKey: { name: 'userId', allowNull: false },
      sourceKey: 'id',
    });
    this.hasMany(db.issueTracker, {
      foreignKey: { name: 'userId', allowNull: false },
      sourceKey: 'id',
    });
  }
};
