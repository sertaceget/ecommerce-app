import { NextResponse } from 'next/server';

const categories = [
  "Electronics",
  "Clothing",
  "Home & Garden",
  "Sports",
  "Books",
  "Toys",
  "Beauty",
  "Automotive",
];

export async function GET() {
  return NextResponse.json(categories);
}