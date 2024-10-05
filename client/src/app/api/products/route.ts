import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: "Smartphone", price: 599.99, category: "Electronics" },
  { id: 2, name: "Laptop", price: 999.99, category: "Electronics" },
  { id: 3, name: "T-shirt", price: 19.99, category: "Clothing" },
  { id: 4, name: "Jeans", price: 49.99, category: "Clothing" },
  { id: 5, name: "Coffee Maker", price: 79.99, category: "Home & Garden" },
  { id: 6, name: "Running Shoes", price: 89.99, category: "Sports" },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const product = await request.json();
  // In a real app, you would save this to a database
  products.push({ ...product, id: products.length + 1 });
  return NextResponse.json(product, { status: 201 });
}