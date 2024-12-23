import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center flex-wrap">
          {/* Left Section: Navigation Links */}
          <div className="space-x-6 flex flex-wrap justify-center md:justify-start">
            <Link href="/" className="hover:text-gray-400 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-400 transition duration-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-400 transition duration-300">
              Contact Us
            </Link>
          </div>

          {/* Right Section: Social Media Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
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
                  d="M18 2.003c1.104 0 1.998.895 1.998 2.001v15.993a2 2 0 0 1-1.998 2.001h-12a2 2 0 0 1-1.998-2.001V4.004c0-1.106.894-2.001 1.998-2.001h12zM14 7h-4v3h4V7zm0 5h-4v7h4v-7z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
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
                  d="M23 3a10.27 10.27 0 0 1-3.004.822A4.418 4.418 0 0 0 22.428 2a8.82 8.82 0 0 1-2.557.98A4.428 4.428 0 0 0 16.62 0c-2.434 0-4.416 1.978-4.416 4.417 0 .346.039.682.113 1.002a12.59 12.59 0 0 1-9.16-4.635A4.417 4.417 0 0 0 6.64 3.06a4.394 4.394 0 0 0-.592 2.214c0 1.536.779 2.887 1.97 3.68a4.392 4.392 0 0 1-2-.553v.056c0 2.137 1.518 3.922 3.53 4.327a4.426 4.426 0 0 1-1.165.156c-.285 0-.562-.028-.834-.083.576 1.792 2.249 3.1 4.234 3.137a8.845 8.845 0 0 1-5.44 1.88c-.353 0-.703-.021-1.049-.062a12.576 12.576 0 0 0 6.81 2.016c8.167 0 12.66-6.76 12.66-12.621 0-.192-.004-.384-.014-.576A9.01 9.01 0 0 0 23 3z"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
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
                  d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-6">
          <p>© 2024 My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
