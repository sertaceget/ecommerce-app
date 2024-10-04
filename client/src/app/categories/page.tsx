import Link from "next/link";

export default function Categories() {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Categories</h1>
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
    </div>
  );
}