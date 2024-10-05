const express = require('express');
const { searchProducts } = require('./elasticsearch');
const { syncProducts } = require('./sync');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8087;

app.use(express.json());

app.get('/search', async (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }
  try {
    const results = await searchProducts(q);
    res.json(results);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'An error occurred during search' });
  }
});

syncProducts().catch(console.error);

app.listen(PORT, () => {
  console.log(`Search service running on port ${PORT}`);
});