const express = require('express');
const router = express.Router();
const MilestonesController = require('../controllers/milestones');

router.get('/:issueTrackerId', MilestonesController.getMilestones);
module.exports = router;
