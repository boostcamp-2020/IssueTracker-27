const { db } = require('../models/index');

const LabelsService = {
  getAllLabels: async (issueTrackerId) => {
    return await db.label.findAll({
      where: { issueTrackerId },
      attributes: ['id', 'title', 'description', 'color', 'issueTrackerId'],
    });
  },
};

module.exports = LabelsService;
