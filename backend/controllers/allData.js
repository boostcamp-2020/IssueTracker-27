const AllDataService = require('../services/allData');

const AllDataController = {
  getAllData: async (req, res) => {
    try {
      const { issueTrackerId } = req.query;

      const [
        issues,
        labels,
        milestones,
        joinUsers,
      ] = await AllDataService.getAllData(issueTrackerId);

      res.status(200).json({ issues, labels, milestones, joinUsers });
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
};

module.exports = AllDataController;
