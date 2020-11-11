const LabelsService = require('../services/labels');

const LabelsController = {
  getLabels: async (req, res) => {
    const { issueTrackerId } = req.params;

    try {
      const labels = await LabelsService.getAllLabels(issueTrackerId);

      res.status(200).json(labels);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'error' });
    }
  },
};

module.exports = LabelsController;
