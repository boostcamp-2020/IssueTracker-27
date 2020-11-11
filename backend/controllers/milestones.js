const MilestonesService = require('../services/milestones');

const MilestonesController = {
  getMilestones: async (req, res) => {
    const { issueTrackerId } = req.params;

    try {
      const milestones = await MilestonesService.getAllMilestoneData(
        issueTrackerId
      );

      res.status(200).json(milestones);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'error' });
    }
  },
};

module.exports = MilestonesController;
