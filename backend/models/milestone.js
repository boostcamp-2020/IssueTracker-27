const Sequelize = require('sequelize');

module.exports = class Milestone extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        dueDate: {
          type: Sequelize.DATEONLY,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'Milestone',
        tableName: 'milestone',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(db) {
    this.hasMany(db.issue, {
      foreignKey: 'milestoneId',
      sourceKey: 'id',
    });
    this.belongsTo(db.issueTracker, {
      foreignKey: { field: 'issueTrackerId', allowNull: false },
      targetKey: 'id',
    });
  }
};
