const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8085;

let db;

async function connectToDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  db = client.db('ecommerce');
  console.log('Connected to MongoDB');
}

app.use(express.json());

app.post('/payments', async (req, res) => {
  // Implement payment processing logic
});

app.get('/payments/:id', async (req, res) => {
  // Implement get payment details logic
});

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Payment service running on port ${PORT}`);
  });
});