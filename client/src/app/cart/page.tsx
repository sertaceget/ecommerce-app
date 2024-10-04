export default function Cart() {
  // This would typically come from a state management solution like Redux or React Context
  const cartItems = [
    { id: 1, name: "Smartphone", price: 599.99, quantity: 1 },
    { id: 2, name: "T-shirt", price: 19.99, quantity: 2 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-foreground">Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-secondary bg-opacity-10 shadow-md rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary bg-opacity-20">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary">
                {cartItems.map((item) => (
                  <tr key={item.id} className="text-foreground">
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-right">
            <p className="text-xl font-semibold text-foreground">Total: ${total.toFixed(2)}</p>
            <button className="mt-4 bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}