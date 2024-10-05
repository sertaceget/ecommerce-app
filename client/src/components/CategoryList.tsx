"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function CategoryList({ initialCategories }: { initialCategories: string[] }) {
  const [categories] = useState(initialCategories);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/categories/${category.toLowerCase().replace(" & ", "-")}`}
          className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-gray-50"
        >
          <h2 className="font-semibold text-lg">{category}</h2>
        </Link>
      ))}
    </div>
  );
}
