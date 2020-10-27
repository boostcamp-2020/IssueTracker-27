const Sequelize = require('sequelize');

module.exports = class IssueTracker extends Sequelize.Model {
  static init(sequelize){
    return super.init({
      name: {
        type: Sequelize.STRING(30),
        unique: true,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'IssueTracker',
      tableName: 'issueTracker',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      timestamps: true,
      paranoid: true,
    });
  }

  static associate(db) {
    this.hasMany(db.joinUser, {
      foreignKey: {field: 'issueTrackerId', allowNull: false},
      sourceKey: 'id',
    });
    this.hasMany(db.label, {
      foreignKey: {field: 'issueTrackerId', allowNull: false},
      sourceKey: 'id',
    });
    this.hasMany(db.issue, {
      foreignKey: {field: 'issueTrackerId', allowNull: false},
      sourceKey: 'id',
    });
    this.hasMany(db.milestone, {
      foreignKey: {field: 'issueTrackerId', allowNull: false},
      sourceKey: 'id',
    });
    this.belongsTo(db.user, {
      foreignKey: {field: 'userId', allowNull: false},
      targetKey: 'id',
    });
  }
}