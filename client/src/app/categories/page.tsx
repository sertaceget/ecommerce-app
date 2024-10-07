import CategoryList from '../../components/CategoryList';

async function getCategories(): Promise<string[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
}

export default async function Categories() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Product Categories</h1>
      <CategoryList initialCategories={categories} />
    </div>
  );
}