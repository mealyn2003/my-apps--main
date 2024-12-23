'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Header Title */}
        <h1 className="text-3xl font-semibold">My App</h1>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-blue-500"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300 transition duration-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
