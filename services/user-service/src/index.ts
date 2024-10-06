import express from 'express';
import dotenv from 'dotenv';
import { getUsers, createUser } from './handlers/user_handlers';
import { authMiddleware } from './middleware/auth';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());

// Apply authMiddleware to all routes
app.use((req, res, next) => {
  authMiddleware()(req, res, next);
});

app.get('/users', getUsers);
app.post('/users', createUser);

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
}).on('error', (error) => {
  console.error('Error starting server:', error);
});
