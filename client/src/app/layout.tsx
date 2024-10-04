import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ShopEase',
  description: 'Your one-stop e-commerce solution',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <header className="bg-primary p-4">
                <nav className="container mx-auto flex justify-between items-center">
                  <Link href="/" className="text-2xl font-bold text-nav-text">ShopEase</Link>
                  <div className="space-x-4">
                    <Link href="/products" className="nav-link">Products</Link>
                    <Link href="/categories" className="nav-link">Categories</Link>
                    <Link href="/cart" className="nav-link">Cart</Link>
                    <Link href="/account" className="nav-link">Account</Link>
                  </div>
                </nav>
              </header>
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
              <footer className="bg-primary text-nav-text p-4 mt-8">
                <div className="container mx-auto text-center">
                  <p>&copy; {currentYear} ShopEase. All rights reserved.</p>
                </div>
              </footer>
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}