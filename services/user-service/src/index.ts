import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get('/users', (req, res) => {
  // Implement get users logic
  res.json({ users: ['User 1', 'User 2'] });
});

app.post('/users', (req, res) => {
  // Implement create user logic
  res.status(201).json({ message: 'User created successfully' });
});

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});