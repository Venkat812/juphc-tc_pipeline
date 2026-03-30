const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db');

/**
 * REGISTER USER
 */
router.post('/register', async (req, res) => {
  try {
    const db = await connectToDatabase();

    const { name, email, password } = req.body;

    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = {
      name,
      email,
      password
    };

    await db.collection('users').insertOne(newUser);

    res.json({ message: "User registered successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * LOGIN USER
 */
router.post('/login', async (req, res) => {
  try {
    const db = await connectToDatabase();

    const { email, password } = req.body;

    const user = await db.collection('users').findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user: {
        email: user.email,
        name: user.name
      }
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * UPDATE USER INFORMATION
 */
router.put('/update/:email', async (req, res) => {
  try {
    const db = await connectToDatabase();

    const { email } = req.params;
    const { name, password } = req.body;

    const result = await db.collection('users').updateOne(
      { email: email },
      {
        $set: {
          name: name,
          password: password
        }
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User updated successfully",
      result
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
