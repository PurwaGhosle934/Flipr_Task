import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import React from 'react';
import Link from 'next/link';

const Blog: React.FC = () => {
  return (
    <>
      {/* Header */}
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
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
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

      {/* Featured Post Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Post</h2>
        <div className="md:flex">
          {/* Left Side */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold">Step-by-step guide to choosing great font pairs</h3>
            <p className="text-sm text-gray-600">By John Doe | May 23, 2022</p>
            <p className="mt-4 text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.
            </p>
            <button className="mt-6 bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded hover:bg-yellow-500">
              Read More
            </button>
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/Client-First%20-%20IMAGES/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg" alt="Featured Post" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">All posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Post 1 */}
          <div>
            <img src="/Client-First%20-%20IMAGES/two-women-in-front-of-dry-erase-board-1181533.svg" alt="Post 1" className="w-full h-auto object-cover rounded-lg mb-4" />
            <span className="text-purple-500 uppercase text-xs">Startup</span>
            <h3 className="text-xl font-semibold mt-2">Design tips for designers that cover everything you need</h3>
            <p className="mt-2 text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          {/* Post 2 */}
          <div>
            <img src="/Client-First%20-%20IMAGES/photo-of-people-doing-handshakes-3183197.svg" alt="Post 2" className="w-full h-auto object-cover rounded-lg mb-4" />
            <span className="text-purple-500 uppercase text-xs">Business</span>
            <h3 className="text-xl font-semibold mt-2">How to build rapport with your web design clients</h3>
            <p className="mt-2 text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          {/* Post 3 */}
          <div>
            <img src="/Client-First%20-%20IMAGES/photo-of-woman-looking-at-man-3183173.svg" alt="Post 3" className="w-full h-auto object-cover rounded-lg mb-4" />
            <span className="text-purple-500 uppercase text-xs">Startup</span>
            <h3 className="text-xl font-semibold mt-2">Logo design trends to avoid in 2022</h3>
            <p className="mt-2 text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          {/* Post 4 */}
          <div>
            <img src="/Client-First%20-%20IMAGES/photo-of-people-walking-on-hallway-3182811.svg" alt="Post 4" className="w-full h-auto object-cover rounded-lg mb-4" />
            <span className="text-purple-500 uppercase text-xs">Technology</span>
            <h3 className="text-xl font-semibold mt-2">8 Figma design systems you can download for free today</h3>
            <p className="mt-2 text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-8">
          <button className="text-gray-500 hover:text-black">Prev</button>
          <button className="text-gray-500 hover:text-black">Next</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">All Categories</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Category 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-lg font-bold mb-2">Business</h4>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Category 2 */}
          <div className="bg-yellow-400 p-6 rounded-lg shadow-md text-center">
            <h4 className="text-lg font-bold mb-2 text-gray-900">Startup</h4>
            <p className="text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Category 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-lg font-bold mb-2">Economy</h4>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Category 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-lg font-bold mb-2">Technology</h4>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-2xl font-bold">Join our team to be a part of our story</h2>
        <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="mt-6 bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded hover:bg-yellow-500">
          Join Now
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Blog;