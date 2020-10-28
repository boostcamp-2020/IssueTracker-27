const express = require('express');
const router = express.Router();
const { db } = require('../models/index');

router.get('/', async (req, res) => {
  try {
    const { issueTrackerId } = req.query;

    const issues = await db.issue.findAll({
      where: { issueTrackerId },
      attributes: ['id', 'title', 'description', 'status', 'openAt'],
      include: [
        {
          model: db.issueLabel,
          attributes: ['id'],
          include: {
            model: db.label,
            attributes: ['id', 'title', 'description', 'color'],
          },
        },
        {
          model: db.milestone,
          attributes: ['id', 'title', 'description', 'status', 'dueDate'],
        },
      ],
    });

    res.status(200).json({ issues });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

module.exports = router;
