const express = require('express');
const router = express.Router();
const AllDataController = require('../controllers/allData');

router.get('/', AllDataController.getAllData);

module.exports = router;
