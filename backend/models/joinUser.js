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
      foreignKey: { field: 'joinUserId', allowNull: false },
      sourceKey: 'id',
    });
    this.hasMany(db.issue, {
      foreignKey: 'joinUserId',
      sourceKey: 'id',
    });
    this.hasMany(db.issue, {
      foreignKey: 'joinUserAssigneeId',
      sourceKey: 'id',
    });
    this.belongsTo(db.user, {
      foreignKey: { field: 'userId', allowNull: false },
      targetKey: 'id',
    });
    this.belongsTo(db.issueTracker, {
      foreignKey: { field: 'issueTrackerId', allowNull: false },
      targetKey: 'id',
    });
  }
};
