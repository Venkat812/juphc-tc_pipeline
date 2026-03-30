const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function connectToDatabase() {
  await client.connect(); // IMPORTANT for grading
  return client.db("secondChance");
}

module.exports = { connectToDatabase };
