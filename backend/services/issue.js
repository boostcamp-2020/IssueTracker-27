const { db } = require('../models/index');

const IssueService = {
  createNewIssue: async ({
    joinUserId,
    title,
    description,
    milestoneId,
    issueTrackerId,
    labelIds,
    joinUserIds,
  }) => {
    const newIssue = await db.issue.create({
      joinUserId,
      title,
      description,
      milestoneId,
      issueTrackerId,
    });

    await Promise.all([
      db.issueLabel.bulkCreate(
        labelIds.map((labelId) => ({ labelId, issueId: newIssue.id }))
      ),
      db.assignee.bulkCreate(
        joinUserIds.map((joinUserId) => ({
          joinUserId,
          issueId: newIssue.id,
        }))
      ),
    ]);
  },
  updateIssue: async ({
    issueId,
    title,
    description,
    deleteIssueLabelIds,
    addLabelIds,
    milestoneId,
    deleteAssigneeIds,
    addJoinUserIds,
  }) => {
    await Promise.all([
      db.assignee.destroy({
        where: {
          id: deleteAssigneeIds,
        },
      }),
      db.assignee.bulkCreate(
        addJoinUserIds.map((joinUserId) => ({
          joinUserId,
          issueId,
        }))
      ),
      db.issueLabel.destroy({
        where: {
          labelId: deleteIssueLabelIds,
          issueId,
        },
      }),
      db.issueLabel.bulkCreate(
        addLabelIds.map((labelId) => ({ labelId, issueId }))
      ),
      db.issue.update(
        {
          title,
          description,
          milestoneId,
        },
        {
          where: {
            id: issueId,
          },
        }
      ),
    ]);
  },
};

module.exports = IssueService;
