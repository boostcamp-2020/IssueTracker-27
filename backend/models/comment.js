const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Comment',
        tableName: 'comment',
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
