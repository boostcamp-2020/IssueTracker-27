const Sequelize = require('sequelize');

module.exports = class Issue extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        openAt: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Issue',
        tableName: 'issue',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(db) {
    this.hasMany(db.comment, {
      foreignKey: { field: 'issueId', allowNull: false },
      sourceKey: 'id',
    });
    this.hasMany(db.issueLabel, {
      foreignKey: { field: 'issueId', allowNull: false },
      sourceKey: 'id',
    });
    this.hasMany(db.assignee, {
      foreignKey: { field: 'issueId', allowNull: false },
      sourceKey: 'id',
    });
    this.belongsTo(db.joinUser, {
      foreignKey: { field: 'joinUserId', allowNull: false },
      targetKey: 'id',
    });
    this.belongsTo(db.issueTracker, {
      foreignKey: { field: 'issueTrackerId', allowNull: false },
      targetKey: 'id',
    });
    this.belongsTo(db.milestone, {
      foreignKey: 'milestoneId',
      targetKey: 'id',
    });
  }
};
