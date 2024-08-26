
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <Header />

      <main className="container mx-auto mt-10 flex-grow">
        {/* Hero Section */}
        <section className="bg-white rounded-lg shadow-md mb-10">
          <div className="relative">
            <Image src="Client-First%20-%20IMAGES/Client-First%20-%20IMAGEShero.jpg.svg" alt="Client-First" width={1920} height={800} className="w-full h-auto rounded-t-lg" />
            <div className="absolute top-0 left-0 p-8 text-white">
              <h1 className="text-4xl font-bold">Step-by-step guide to choosing great font pairs</h1>
              <p className="mt-2">By Jane Roe, May 15, 2022 - 3 min read</p>
              <p className="mt-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <Link href="#">
                <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg">Read More</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Post and All Posts Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
            <div className="flex">
              <Image src="/Client-First%20-%20IMAGES/white-concrete-building-1838640.svg" alt="Featured Post" width={400} height={250} className="rounded-lg mr-4"/>
              <div>
                <h3 className="text-xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p className="text-gray-600 mt-2">By John Doe, May 12, 2022</p>
                <Link href="#">
                  <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg">Read More</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">All Posts</h2>
            <ul>
              <li className="mb-4">
                <Link href="#">
                  <span className="text-lg font-bold text-yellow-500 hover:underline">8 Figma design systems that you can download for free today.</span>
                </Link>
                <p className="text-gray-600 mt-2">By Jane Roe, August 23, 2023</p>
              </li>
              <li className="mb-4">
                <Link href="#">
                  <span className="text-lg font-bold text-yellow-500 hover:underline">8 Figma design systems that you can download for free today.</span>
                </Link>
                <p className="text-gray-600 mt-2">By Jane Roe, August 23, 2023</p>
              </li>
              <li className="mb-4">
                <Link href="#">
                  <span className="text-lg font-bold text-yellow-500 hover:underline">8 Figma design systems that you can download for free today.</span>
                </Link>
                <p className="text-gray-600 mt-2">By Jane Roe, August 23, 2023</p>
              </li>
            </ul>
            <Link href="#">
              <span className="text-yellow-500 hover:underline">View All</span>
            </Link>
          </div>
        </section>

        {/* About Us and Our Mission Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">We are a community of content writers who share their learnings.</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link href="#">
              <span className="text-yellow-500 hover:underline mt-4 block">Read More</span>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">Creating valuable content for creatives all around the world.</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Choose A Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Business</h3>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Startup</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Economy</h3>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Technology</h3>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>

        {/* Why We Started Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-10">
          <div className="flex">
            <Image src="/Client-First%20-%20IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984.svg" alt="Why We Started" width={500} height={300} className="rounded-lg mr-4"/>
            <div>
              <h2 className="text-2xl font-bold mb-4">Why We Started</h2>
              <p className="text-gray-600 mb-4">It started out as a simple idea and evolved into our passion.</p>
              <Link href="#">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Discover our story</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Authors Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">List of Authors</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image src="/Client-First%20-%20IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg" alt="Author 1" width={100} height={100} className="rounded-full mx-auto mb-4"/>
              <h3 className="text-lg font-bold">Floyd Miles</h3>
              <p className="text-gray-600">Content Writer</p>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md text-center">
              <Image src="/Client-First%20-%20IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg" alt="Author 2" width={100} height={100} className="rounded-full mx-auto mb-4"/>
              <h3 className="text-lg font-bold">Dianne Russell</h3>
              <p>Editor In Chief</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image src="/Client-First%20-%20IMAGES/fashion-woman-cute-shoes-5704849.svg" alt="Author 3" width={100} height={100} className="rounded-full mx-auto mb-4"/>
              <h3 className="text-lg font-bold">Jenny Wilson</h3>
              <p className="text-gray-600">Content Creator</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image src="/Client-First%20-%20IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg" alt="Author 4" width={100} height={100} className="rounded-full mx-auto mb-4"/>
              <h3 className="text-lg font-bold">Leslie Alexander</h3>
              <p className="text-gray-600">Content Strategist</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-200 p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-bold mb-6">What People Say About Our Blog</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.</p>
          <div className="flex items-center mt-4">
            <Image src="/Client-First%20-%20IMAGES/Image.svg" alt="Testimonial" width={50} height={50} className="rounded-full"/>
            <div className="ml-4">
              <p className="font-bold">Jonathan Vallem</p>
              <p className="text-gray-600">Founder, LogiSwap</p>
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-6">Join our team to be a part of our story</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link href="#">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Join Now</button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}