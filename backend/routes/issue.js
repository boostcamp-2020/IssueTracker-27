const express = require('express');
const router = express.Router();
const { db } = require('../models/index');

router.post('/', async (req, res) => {
  const {
    joinUserId,
    title,
    description,
    milestoneId,
    issueTrackerId,
    labelIds = [],
    joinUserIds = [],
  } = req.body;

  try {
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
        joinUserIds.map((joinUserId) => ({ joinUserId, issueId: newIssue.id }))
      ),
    ]);

    return res.status(200).json({ message: 'issue가 만들어졌습니다.' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'error' });
  }
});

router.patch('/:issueId', async (req, res) => {
  const { issueId } = req.params;
  const {
    title,
    description,
    deleteIssueLabelIds = [],
    addLabelIds = [],
    milestoneId,
    deleteAssigneeIds = [],
    addJoinUserIds = [],
  } = req.body;
  try {
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
          id: deleteIssueLabelIds,
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

    res.status(200).json({ message: 'issue가 업데이트 되었습니다.' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'error' });
  }
});

module.exports = router;
