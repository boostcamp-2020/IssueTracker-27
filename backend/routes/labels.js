const express = require('express');
const router = express.Router();
const LabelsController = require('../controllers/labels');

router.get('/:issueTrackerId', LabelsController.getLabels);

module.exports = router;
