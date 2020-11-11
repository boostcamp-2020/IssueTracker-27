const IssueService = require('../services/issue');

const IssueController = {
  getIssue: async (req, res) => {
    const { issueId } = req.params;
    try {
      const issue = await IssueService.getIssue(issueId);
      return res.status(200).json({ issue });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'error' });
    }
  },
  postIssue: async (req, res) => {
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
      await IssueService.createNewIssue({
        joinUserId,
        title,
        description,
        milestoneId,
        issueTrackerId,
        labelIds,
        joinUserIds,
      });

      return res.status(200).json({ message: 'issue가 만들어졌습니다.' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'error' });
    }
  },

  patchIssue: async (req, res) => {
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
      await IssueService.updateIssue({
        issueId,
        title,
        description,
        deleteIssueLabelIds,
        addLabelIds,
        milestoneId,
        deleteAssigneeIds,
        addJoinUserIds,
      });

      res.status(200).json({ message: 'issue가 업데이트 되었습니다.' });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'error' });
    }
  },
};

module.exports = IssueController;
