const { db } = require('../models/index');

const AllDataService = {
  getAllData: async (issueTrackerId) => {
    return await Promise.all([
      db.issue.findAll({
        where: { issueTrackerId },
        attributes: ['id', 'title', 'description', 'status', 'openAt'],
        include: [
          {
            model: db.joinUser,
            attributes: ['id'],
            include: {
              model: db.user,
              attributes: ['id', 'username', 'profileImage'],
            },
          },
          {
            model: db.issueLabel,
            attributes: ['id'],
            include: {
              model: db.label,
              attributes: ['id', 'title', 'description', 'color'],
            },
          },
          {
            model: db.milestone,
            attributes: ['id', 'title', 'description', 'status', 'dueDate'],
          },
          {
            model: db.assignee,
            attributes: ['id'],
            include: {
              model: db.joinUser,
              attributes: ['id'],
              include: {
                model: db.user,
                attributes: ['id', 'username', 'profileImage'],
              },
            },
          },
        ],
      }),
      db.label.findAll({
        where: { issueTrackerId },
        attributes: ['id', 'title', 'description', 'color'],
      }),
      db.milestone.findAll({
        where: { issueTrackerId },
        attributes: ['id', 'title', 'description', 'status', 'dueDate'],
      }),
      db.joinUser.findAll({
        where: { issueTrackerId },
        attributes: ['id'],
        include: {
          model: db.user,
          attributes: ['id', 'username', 'profileImage'],
        },
      }),
    ]);
  },
};

module.exports = AllDataService;
