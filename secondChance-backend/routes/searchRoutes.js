const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db');

router.get('/', async (req, res) => {
  const db = await connectToDatabase();

  let query = {};

  if (req.query.category) {
    query.category = req.query.category;
  }

  if (req.query.condition) {
    query.condition = req.query.condition;
  }

  const items = await db.collection('secondChanceItems').find(query).toArray();

  res.json(items);
});

module.exports = router;
