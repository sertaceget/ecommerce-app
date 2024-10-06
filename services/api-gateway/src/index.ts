import express from 'express';
import createProxyMiddleware from 'http-proxy-middleware';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/auth', createProxyMiddleware({ target: 'http://auth-service:3002', changeOrigin: true }));
app.use('/users', createProxyMiddleware({ target: 'http://user-service:3003', changeOrigin: true }));
app.use('/products', createProxyMiddleware({ target: 'http://product-service:3004', changeOrigin: true }));
app.use('/orders', createProxyMiddleware({ target: 'http://order-service:8084', changeOrigin: true }));
app.use('/payments', createProxyMiddleware({ target: 'http://payment-service:8085', changeOrigin: true }));
app.use('/inventory', createProxyMiddleware({ target: 'http://inventory-service:8086', changeOrigin: true }));
app.use('/search', createProxyMiddleware({ target: 'http://search-service:8087', changeOrigin: true }));
app.use('/category', createProxyMiddleware({ target: 'http://category-service:8088', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});