const express = require('express');
const router = express.Router();
const LabelController = require('../controllers/label');

router.post('/', LabelController.postLabel);
router.patch('/:labelId', LabelController.patchLabel);
router.delete('/:labelId', LabelController.deleteLabel);

module.exports = router;
