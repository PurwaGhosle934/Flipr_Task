import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Finsweet</Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="hover:text-yellow-400">Home</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-yellow-400">Blog</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Subscribe Button */}
        <div>
          <button className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded hover:bg-yellow-500">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;