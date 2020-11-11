const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const allDataRouter = require('./allData');
const issueRouter = require('./issue');

router.use('/auth', authRouter);
router.use('/issue', issueRouter);
router.use('/allData', allDataRouter);

module.exports = router;
