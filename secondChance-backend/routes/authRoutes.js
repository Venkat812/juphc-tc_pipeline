const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const users = [];

router.post('/register', (req, res) => {
  users.push(req.body);
  res.json({ message: "Registered" });
});

router.post('/login', (req, res) => {
  const user = users.find(u => u.email === req.body.email);

  if (!user) return res.status(404).json({ error: "User not found" });

  const token = jwt.sign({ id: 1 }, "secret");
  res.json({ token });
});

module.exports = router;
