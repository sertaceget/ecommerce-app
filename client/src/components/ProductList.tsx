"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export default function ProductList({ initialProducts }: { initialProducts: Product[] }) {
  const [products] = useState(initialProducts);
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
            <button 
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}