const Sequelize = require('sequelize');

module.exports = class Label extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING(30),
          allowNull: true,
        },
        color: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Label',
        tableName: 'label',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(db) {
    this.hasMany(db.issue, {
      foreignKey: 'labelId',
      sourceKey: 'id',
    });
    this.belongsTo(db.issueTracker, {
      foreignKey: { field: 'issueTrackerId', allowNull: false },
      targetKey: 'id',
    });
  }
};
