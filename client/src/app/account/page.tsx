import AccountDetails from '../../components/AccountDetails';

export default function Account() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Account</h1>
      <AccountDetails />
    </div>
  );
}