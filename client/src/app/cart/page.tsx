import CartContents from '../../components/CartContents';

export default function Cart() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <CartContents />
    </div>
  );
}