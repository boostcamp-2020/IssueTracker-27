const express = require('express');
const router = express.Router();
const IssueController = require('../controllers/issue');

router.get('/:issueId', IssueController.getIssue);
router.post('/', IssueController.postIssue);
router.patch('/:issueId', IssueController.patchIssue);

module.exports = router;
