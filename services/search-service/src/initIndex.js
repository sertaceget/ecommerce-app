const { Client } = require('@elastic/elasticsearch');
require('dotenv').config();

const client = new Client({ node: process.env.ELASTICSEARCH_URI });

async function initIndex() {
  await client.indices.create({
    index: 'products',
    body: {
      mappings: {
        properties: {
          name: { type: 'text' },
          description: { type: 'text' },
          price: { type: 'float' },
          category: { type: 'keyword' }
        }
      }
    }
  }, { ignore: [400] });

  console.log('Index initialized');
}

initIndex().catch(console.error);