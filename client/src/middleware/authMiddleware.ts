import { NextRequest, NextResponse } from 'next/server';

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:8082';

export function authMiddleware(handler: Function) {
  return async (req: NextRequest) => {
    const token = req.headers.get('Authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    try {
      const response = await fetch(`${AUTH_SERVICE_URL}/validate?token=${token}`);
      if (!response.ok) {
        throw new Error('Invalid token');
      }
      return handler(req);
    } catch (error) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
  };
}
