import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-8">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              Finsweet
            </Link>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-yellow-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-yellow-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Subscribe Section */}
          <div className="text-center mb-8 md:mb-0">
            <h4 className="text-lg mb-4">
              Subscribe to our newsletter to get the latest updates and news
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="py-2 px-4 rounded-l bg-gray-800 border-none text-white"
              />
              <button className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-r hover:bg-yellow-500">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p>Finsweet 118 2561 Finsbun</p>
            <p>Email: finsweet.com | Phone: 020 7993 2905</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;