import Link from "next/link";

export default function Products() {
  // This would typically come from an API or database
  const products = [
    { id: 1, name: "Smartphone", price: 599.99, category: "Electronics" },
    { id: 2, name: "Laptop", price: 999.99, category: "Electronics" },
    { id: 3, name: "T-shirt", price: 19.99, category: "Clothing" },
    { id: 4, name: "Jeans", price: 49.99, category: "Clothing" },
    { id: 5, name: "Coffee Maker", price: 79.99, category: "Home & Garden" },
    { id: 6, name: "Running Shoes", price: 89.99, category: "Sports" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}