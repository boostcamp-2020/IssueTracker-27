const { db } = require('../models/index');
const ISSUETRACKER_ID = 1;

const IssueService = {
  getIssue: async (issueId) => {
    return await db.issue.findOne({
      where: {
        id: issueId,
        issueTrackerId: ISSUETRACKER_ID,
      },
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
    });
  },
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
