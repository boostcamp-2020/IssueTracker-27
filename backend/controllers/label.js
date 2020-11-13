const LabelService = require('../services/label');

const LabelController = {
  postLabel: async (req, res) => {
    const { title, description, color, issueTrackerId } = req.body;

    try {
      const newLabel = await LabelService.createNewLabel({
        title,
        description,
        color,
        issueTrackerId,
      });

      return res
        .status(200)
        .json({ message: 'label이 만들어졌습니다.', newLabel: newLabel });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'error' });
    }
  },
  patchLabel: async (req, res) => {
    const { labelId } = req.params;
    const { title, description, color, issueTrackerId } = req.body;
    try {
      await LabelService.updateLabel({
        labelId,
        title,
        description,
        color,
        issueTrackerId,
      });

      res.status(200).json({
        message: 'label이 업데이트 되었습니다.',
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'error' });
    }
  },
  deleteLabel: async (req, res) => {
    const { labelId } = req.params;
    try {
      await LabelService.deleteLabel(labelId);

      res.status(200).json({ message: 'label이 삭제되었습니다.' });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'error' });
    }
  },
};

module.exports = LabelController;
