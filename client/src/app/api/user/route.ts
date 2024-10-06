import { NextRequest, NextResponse } from 'next/server';
import { authMiddleware } from '@/middleware/authMiddleware';

const USER_SERVICE_URL = process.env.USER_SERVICE_URL || 'http://localhost:3003';

export const GET = authMiddleware(async (req: NextRequest) => {
  try {
    const response = await fetch(`${USER_SERVICE_URL}/users`, {
      headers: {
        'Authorization': req.headers.get('Authorization') || '',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const users = await response.json();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
});

export const POST = authMiddleware(async (req: NextRequest) => {
  try {
    const body = await req.json();
    const response = await fetch(`${USER_SERVICE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.get('Authorization') || '',
      },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const newUser = await response.json();
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
});

// Implement PUT, DELETE similarly