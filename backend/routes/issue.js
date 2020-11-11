const express = require('express');
const router = express.Router();
const IssueController = require('../controllers/issue');

router.post('/', IssueController.postIssue);
router.patch('/:issueId', IssueController.patchIssue);

module.exports = router;
