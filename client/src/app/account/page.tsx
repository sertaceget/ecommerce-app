export default function Account() {
  // This would typically come from your authentication system
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "January 1, 2023",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Your Account</h1>
      <div className="bg-secondary bg-opacity-10 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-primary">Profile Information</h2>
        <p className="text-foreground"><strong>Name:</strong> {user.name}</p>
        <p className="text-foreground"><strong>Email:</strong> {user.email}</p>
        <p className="text-foreground"><strong>Member since:</strong> {user.joinDate}</p>
        <button className="mt-4 bg-accent text-white px-4 py-2 rounded hover:bg-opacity-90">
          Edit Profile
        </button>
      </div>
      <div className="mt-8 bg-secondary bg-opacity-10 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-primary">Order History</h2>
        <p className="text-foreground">You haven't placed any orders yet.</p>
      </div>
    </div>
  );
}