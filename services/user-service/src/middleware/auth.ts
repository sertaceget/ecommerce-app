import { Request, Response, NextFunction } from 'express';

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:8082';

export const authMiddleware = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    try {
      const response = await fetch(`${AUTH_SERVICE_URL}/validate`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        return res.status(401).json({ error: errorData.error || 'Invalid token' });
      }

      next();
    } catch (error) {
      console.error('Authentication error:', error);
      res.status(500).json({ error: 'Internal server error during authentication' });
    }
  };
};