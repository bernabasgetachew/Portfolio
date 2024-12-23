'use client';

import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-800 text-white min-h-screen px-4 sm:px-8">
      <main className="max-w-7xl mx-auto p-6 sm:p-8 pt-24 mt-20">
        {/* Portfolio Title Section */}
        <section className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">My Portfolio</h1>
          <p className="text-lg sm:text-xl text-gray-200 italic">
            <b>A collection of projects that showcase my skills and creativity.</b>
          </p>
        </section>
        <section className="text-center mb-8">
          <p className="text-lg sm:text-xl text-gray-200 italic">
            <b>Clicking on the image leads to the GitHub repository.</b>
          </p>
        </section>

        {/* Projects Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Project 1: E-Commerce App */}
          <div
            className="relative group cursor-pointer"
            onClick={() => window.open('https://github.com/bernabasgetachew/E-commerce-website.git', '_blank')}
          >
            <Image
              src="/e-commerce.png" // Replace with your image path
              alt="E-Commerce App"
              width={400}
              height={300}
              className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-bold">E-Commerce App</span>
            </div>
          </div>

          {/* Project 2: Hotel Management App */}
          <div
            className="relative group cursor-pointer"
          >
            <Image
              src="/hotel.jpg" // Replace with your image path
              alt="Hotel Booking App"
              width={400}
              height={300}
              className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-bold">Hotel Booking App</span>
            </div>
          </div>

          {/* Project 3 */}
          <div
            className="relative group cursor-pointer"
          >
            <Image
              src="/hospital.jpg" // Replace with your image path
              alt="Hospital Management"
              width={400}
              height={300}
              className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-bold">Hospital Management</span>
            </div>
          </div>

          {/* Project 4 */}
          <div
            className="relative group cursor-pointer"
          >
            <Image
              src="/Cinema.jpg" // Replace with your image path
              alt="Cinema Ticketing"
              width={400}
              height={300}
              className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-bold">Cinema Ticketing</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
