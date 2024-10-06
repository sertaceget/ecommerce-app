import { NextRequest, NextResponse } from 'next/server';

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:8082';

export async function POST(req: NextRequest) {
  const { path } = await req.json();
  
  try {
    const response = await fetch(`${AUTH_SERVICE_URL}/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(await req.json()),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error in ${path}:`, error);
    return NextResponse.json({ error: `${path} failed` }, { status: 401 });
  }
}