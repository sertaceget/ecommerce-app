import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Welcome to ShopEase</h1>
        <p className="text-xl text-gray-800 dark:text-gray-400">Discover amazing products at unbeatable prices!</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-200">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-colors duration-300">
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                <Image
                  src={`https://via.placeholder.com/300x200?text=Product+${i}`}
                  alt={`Product ${i}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-200">Product {i}</h3>
                <p className="text-gray-800 dark:text-gray-400">$99.99</p>
                <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-200">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Electronics', 'Clothing', 'Home & Garden', 'Sports'].map((category) => (
            <Link
              key={category}
              href={`/categories/${category.toLowerCase().replace(' & ', '-')}`}
              className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <span className="text-gray-900 dark:text-gray-200">{category}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}