import express from 'express';
import createProxyMiddleware from 'http-proxy-middleware';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/auth', createProxyMiddleware({ target: 'http://auth-service:3002', changeOrigin: true }));
app.use('/users', createProxyMiddleware({ target: 'http://user-service:3003', changeOrigin: true }));
app.use('/products', createProxyMiddleware({ target: 'http://product-service:3004', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});