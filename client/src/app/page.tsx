import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopEase</h1>
        <p className="text-xl text-gray-600">Discover amazing products at unbeatable prices!</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured product cards would go here */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold">Product {i}</h3>
                <p className="text-gray-600">$99.99</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Category links would go here */}
          {['Electronics', 'Clothing', 'Home & Garden', 'Sports'].map((category) => (
            <Link
              key={category}
              href={`/categories/${category.toLowerCase()}`}
              className="bg-gray-100 p-4 rounded-lg text-center hover:bg-gray-200"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}