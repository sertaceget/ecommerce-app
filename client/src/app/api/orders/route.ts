import { NextResponse } from 'next/server';

let orders: any[] = [];

export async function GET() {
  return NextResponse.json(orders);
}

export async function POST(request: Request) {
  const order = await request.json();
  // In a real app, you would save this to a database
  const newOrder = { ...order, id: orders.length + 1, date: new Date().toISOString() };
  orders.push(newOrder);
  return NextResponse.json(newOrder, { status: 201 });
}