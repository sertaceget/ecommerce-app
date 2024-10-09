import express from 'express';
import dotenv from 'dotenv';
import { getUsers, createUser, getUserById, updateUser, deleteUser } from './handlers/user_handlers';
import { authMiddleware } from './middleware/auth';
import { Request, Response } from 'express';
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

app.get('/users', async (req: Request, res: Response) => {
  await getUsers(req, res);
});

app.post('/users', async (req: Request, res: Response) => {
  await createUser(req, res);
});

app.get('/users/:id', async (req: Request, res: Response) => {
  await getUserById(req, res);
});

app.put('/users/:id', async (req: Request, res: Response) => {
  await updateUser(req, res);
});

app.delete('/users/:id', async (req: Request, res: Response) => {
  await deleteUser(req, res);
});

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
}).on('error', (error) => {
  console.error('Error starting server:', error);
});
