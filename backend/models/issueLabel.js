const Sequelize = require('sequelize');

module.exports = class IssueLabel extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        modelName: 'IssueLabel',
        tableName: 'issueLabel',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(db) {
    this.belongsTo(db.label, {
      foreignKey: { name: 'labelId', allowNull: false },
      targetKey: 'id',
    });
    this.belongsTo(db.issue, {
      foreignKey: { name: 'issueId', allowNull: false },
      targetKey: 'id',
    });
  }
};
