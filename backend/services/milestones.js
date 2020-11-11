const { db } = require('../models/index');

const MilestonesService = {
  getAllMilestoneData: async (issueTrackerId) => {
    return await db.milestone.findAll({
      where: { issueTrackerId },
      attributes: ['id', 'title', 'description', 'status', 'dueDate'],
      include: {
        model: db.issue,
        atrribute: ['id'],
      },
    });
  },
};

module.exports = MilestonesService;
