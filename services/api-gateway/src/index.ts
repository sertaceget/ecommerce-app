import express from 'express';
import cors from 'cors';
import proxy from 'express-http-proxy';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/auth', proxy('http://auth-service:3002'));
app.use('/users', proxy('http://user-service:3003'));
app.use('/products', proxy('http://product-service:3004'));

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});