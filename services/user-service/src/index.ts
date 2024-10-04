import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'User service is healthy' });
});

app.listen(port, () => {
  console.log(`User service running on port ${port}`);
});