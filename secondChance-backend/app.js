const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./models/db');

const app = express();
app.use(cors());
app.use(express.json());

const itemRoutes = require('./routes/secondChanceItemsRoutes');
const searchRoutes = require('./routes/searchRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/secondchance/items', itemRoutes);
app.use('/api/secondchance/search', searchRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, async () => {
  await connectToDatabase();
  console.log("Server running");
});
