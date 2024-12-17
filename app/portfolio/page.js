'use client';

import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-800 text-white min-h-screen p-8">
      <main className="max-w-7xl mx-auto">
        {/* Portfolio Title Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-6">My Portfolio</h1>
          <p className="text-xl text-gray-200 italic">
            A collection of projects that showcase my skills and creativity.
          </p>
        </section>

        {/* Projects Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              <span className="text-white text-2xl font-bold">E-Commerce App</span>
            </div>
          </div>

          {/* Project 2: Hotel Management App */}
          <div
            className="relative group cursor-pointer"
            
          >
            <Image
              src="/hotel.jpg" // Replace with your image path
              alt="Hotel Management App"
              width={400}
              height={300}
              className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Hotel Management App</span>
            </div>
          </div>

          {/* Project 3: Add another project here */}
          <div
            className="relative group cursor-pointer"
            
          >
            <Image
              src="/hospital.jpg" // Replace with your image path
              alt="Project 3"
              width={400}
              height={300}
              className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Project 3</span>
            </div>
          </div>

          {/* Project 4: Add another project here */}
          <div
            className="relative group cursor-pointer"
           
          >
            <Image
              src="/project4.jpg" // Replace with your image path
              alt="Project 4"
              width={400}
              height={300}
              className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Project 4</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
