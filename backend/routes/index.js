const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const allDataRouter = require('./allData');
const issueRouter = require('./issue');
const labelRouter = require('./label');
const labelsRouter = require('./labels');
const milestonesRouter = require('./milestones');

router.use('/auth', authRouter);
router.use('/issue', issueRouter);
router.use('/allData', allDataRouter);
router.use('/labels', labelsRouter);
router.use('/label', labelRouter);
router.use('/milestones', milestonesRouter);

module.exports = router;
