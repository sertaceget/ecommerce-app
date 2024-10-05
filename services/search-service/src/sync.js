const { MongoClient } = require('mongodb');
const { indexProduct } = require('./elasticsearch');
require('dotenv').config();

async function syncProducts() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('ecommerce');
  const collection = db.collection('products');

  const changeStream = collection.watch();
  changeStream.on('change', async (change) => {
    if (change.operationType === 'insert' || change.operationType === 'update') {
      const product = change.fullDocument;
      await indexProduct(product);
      console.log(`Indexed product: ${product._id}`);
    }
    // Handle delete operations if needed
  });

  console.log('Watching for product changes...');
}

module.exports = { syncProducts };