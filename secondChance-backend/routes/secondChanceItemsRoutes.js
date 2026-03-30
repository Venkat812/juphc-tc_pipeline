const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db');

router.get('/', async (req, res) => {
  const db = await connectToDatabase();
  const items = await db.collection('secondChanceItems').find().toArray();
  res.json(items);
});

router.get('/:id', async (req, res) => {
  const db = await connectToDatabase();
  const item = await db.collection('secondChanceItems').findOne();
  res.json(item);
});

router.post('/', async (req, res) => {
  const db = await connectToDatabase();
  const result = await db.collection('secondChanceItems').insertOne(req.body);
  res.json(result);
});

router.put('/:id', async (req, res) => {
  const db = await connectToDatabase();
  const result = await db.collection('secondChanceItems')
    .findOneAndUpdate({}, { $set: req.body });
  res.json(result);
});

router.delete('/:id', async (req, res) => {
  const db = await connectToDatabase();
  await db.collection('secondChanceItems').deleteOne({});
  res.json({ message: "Deleted" });
});

module.exports = router;
