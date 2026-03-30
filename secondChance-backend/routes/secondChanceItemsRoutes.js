const express = require('express');
const router = express.Router();
const multer = require('multer');
const { connectToDatabase } = require('../models/db');
const { ObjectId } = require('mongodb');

const upload = multer({ dest: 'uploads/' });

/**
 * GET all items
 */
router.get('/', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const items = await db.collection('secondChanceItems').find().toArray();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET item by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const item = await db.collection('secondChanceItems').findOne({
      _id: new ObjectId(req.params.id)
    });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST create item (with file upload)
 */
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const db = await connectToDatabase();

    const newItem = {
      name: req.body.name,
      category: req.body.category,
      condition: req.body.condition,
      description: req.body.description,
      file: req.file ? req.file.filename : null
    };

    const result = await db.collection('secondChanceItems').insertOne(newItem);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * DELETE item by ID
 */
router.delete('/:id', async (req, res) => {
  try {
    const db = await connectToDatabase();

    const result = await db.collection('secondChanceItems').deleteOne({
      _id: new ObjectId(req.params.id)
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
