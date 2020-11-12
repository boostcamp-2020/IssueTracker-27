const { db } = require('../models/index');

const IssueService = {
  createNewLabel: async ({ title, description, color, issueTrackerId }) => {
    return await db.label.create({ title, description, color, issueTrackerId });
  },
  updateLabel: async ({
    labelId,
    title,
    description,
    color,
    issueTrackerId,
  }) => {
    await db.label.update(
      { title, description, color, issueTrackerId },
      { where: { id: labelId } }
    );
  },
  deleteLabel: async (labelId) => {
    await db.label.destroy({ where: { id: labelId } });
  },
};

module.exports = IssueService;
