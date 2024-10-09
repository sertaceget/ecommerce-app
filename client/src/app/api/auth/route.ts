import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/jwt';

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:3002';

export async function POST(req: NextRequest) {
  const { path, email, password } = await req.json();
  
  try {
    const response = await fetch(`${AUTH_SERVICE_URL}/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const token = generateToken(data.userId);
    return NextResponse.json({ token });
  } catch (error) {
    console.error(`Error in ${path}:`, error);
    return NextResponse.json({ error: `${path} failed` }, { status: 401 });
  }
}