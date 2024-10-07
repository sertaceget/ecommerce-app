'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/context/AuthContext'
import { useState, useEffect } from 'react'
import { ShoppingCart, User, Sun, Moon } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    setMounted(true)
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('darkMode', 'true')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('darkMode', 'false')
      }
    }
  }, [darkMode, mounted])

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <AuthProvider>
          <CartProvider>
            <header className="bg-white dark:bg-gray-800 shadow-sm">
              <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <Link href="/" className="text-2xl font-bold text-orange-500 dark:text-orange-400">ShopEase</Link>
                <div className="flex items-center space-x-4">
                  <Link href="/products" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                    Products
                  </Link>
                  <Link href="/categories" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                    Categories
                  </Link>
                  <Link href="/cart" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors" aria-label="Cart">
                    <ShoppingCart className="h-6 w-6" />
                  </Link>
                  <Link href="/account" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors" aria-label="Account">
                    <User className="h-6 w-6" />
                  </Link>
                  {mounted && (
                    <button
                      onClick={toggleDarkMode}
                      className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                      {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                    </button>
                  )}
                </div>
              </nav>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="bg-white dark:bg-gray-800 mt-8">
              <div className="container mx-auto py-6 px-4 text-center text-gray-600 dark:text-gray-400">
                <p>&copy; {currentYear} ShopEase. All rights reserved.</p>
              </div>
            </footer>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}