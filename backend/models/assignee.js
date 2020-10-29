const Sequelize = require('sequelize');

module.exports = class Assignee extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        modelName: 'Assignee',
        tableName: 'assignee',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(db) {
    this.belongsTo(db.joinUser, {
      foreignKey: { name: 'joinUserId', allowNull: false },
      targetKey: 'id',
    });
    this.belongsTo(db.issue, {
      foreignKey: { name: 'issueId', allowNull: false },
      targetKey: 'id',
    });
  }
};
