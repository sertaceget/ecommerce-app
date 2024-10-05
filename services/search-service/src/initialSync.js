const { MongoClient } = require('mongodb');
const { indexProduct } = require('./elasticsearch');
require('dotenv').config();

async function initialSync() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('ecommerce');
  const collection = db.collection('products');

  const cursor = collection.find({});
  let count = 0;
  for await (const product of cursor) {
    await indexProduct(product);
    count++;
    if (count % 100 === 0) {
      console.log(`Indexed ${count} products`);
    }
  }

  console.log(`Initial sync complete. Indexed ${count} products`);
  await client.close();
}

initialSync().catch(console.error);