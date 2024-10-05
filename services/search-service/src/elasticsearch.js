const { Client } = require('@elastic/elasticsearch');
require('dotenv').config();

const client = new Client({ node: process.env.ELASTICSEARCH_URI });

async function indexProduct(product) {
  await client.index({
    index: 'products',
    id: product._id.toString(),
    body: {
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      // Add other relevant fields
    }
  });
}

async function searchProducts(query) {
  const result = await client.search({
    index: 'products',
    body: {
      query: {
        multi_match: {
          query: query,
          fields: ['name', 'description', 'category']
        }
      }
    }
  });
  return result.body.hits.hits.map(hit => hit._source);
}

module.exports = { indexProduct, searchProducts };