const Sequelize = require('sequelize');

module.exports = class JoinUser extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        modelName: 'JoinUser',
        tableName: 'joinUser',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(db) {
    this.hasMany(db.comment, {
      foreignKey: { name: 'joinUserId', allowNull: false },
      sourceKey: 'id',
    });
    this.hasMany(db.issue, {
      foreignKey: { name: 'joinUserId', allowNull: false },
      sourceKey: 'id',
    });
    this.hasMany(db.assignee, {
      foreignKey: { name: 'joinUserId', allowNull: false },
      sourceKey: 'id',
    });
    this.belongsTo(db.user, {
      foreignKey: { name: 'userId', allowNull: false },
      targetKey: 'id',
    });
    this.belongsTo(db.issueTracker, {
      foreignKey: { name: 'issueTrackerId', allowNull: false },
      targetKey: 'id',
    });
  }
};
