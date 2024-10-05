import ProductList from '@/components/ProductList';

// Define the Product type
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

async function getProducts(): Promise<Product[]> {
  console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });  

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return response.json();
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ProductList initialProducts={products} />
    </div>
  );
}