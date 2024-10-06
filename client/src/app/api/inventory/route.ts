import { NextResponse } from 'next/server';

const API_GATEWAY_URL = process.env.API_GATEWAY_URL || 'http://localhost:8080';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId');
  
  if (!productId) {
    return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
  }

  try {
    const response = await fetch(`${API_GATEWAY_URL}/inventory/${productId}`);
    if (!response.ok) throw new Error('Failed to fetch inventory');
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching inventory:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId');
  
  if (!productId) {
    return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
  }

  try {
    const inventoryData = await request.json();
    const response = await fetch(`${API_GATEWAY_URL}/inventory/${productId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inventoryData),
    });
    if (!response.ok) throw new Error('Failed to update inventory');
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating inventory:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}