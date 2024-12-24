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
        <p className="text-lg sm:text-xl text-gray-200 italic text-center bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <b>"Click on the <span className="text-blue-500">E-commerce</span> and{' '}
          <span className="text-blue-500">Hotel-Booking</span> images to explore the GitHub repositories. The other two are collaborative school projects with my talented teammates!"
          </b>
        </p>

        </section>

        {/* Projects Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Project 1: E-Commerce App */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <a href="https://github.com/bernabasgetachew/E-commerce-website.git" target="_blank" rel="noopener noreferrer">
              <Image
                src="/e-commerce.webp" // Replace with your image path
                alt="E-Commerce App"
                width={400}
                height={300}
                className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 hover:translate-x-4 hover:translate-y-4"
              />
            </a>
            <div className="mt-4 text-center">
              <span className="text-white text-xl sm:text-2xl font-bold">E-Commerce App</span>
            </div>
          </div>

          {/* Project 2: Hotel Management App */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <a href="https://github.com/bernabasgetachew/Hotel-Booking.git" target="_blank" rel="noopener noreferrer">
              <Image
                src="/hotel.webp" // Replace with your image path
                alt="Hotel Booking App"
                width={400}
                height={500} // Adjusted height for proper alignment
                className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 hover:translate-x-4 hover:translate-y-4"
              />
            </a>
            <div className="mt-4 text-center">
              <span className="text-white text-xl sm:text-2xl font-bold">Hotel Booking website</span>
            </div>
          </div>

          {/* Project 3: Hospital Management */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden">
            
              <Image
                src="/hospital_management.jpg" // Replace with your image path
                alt="Hospital Management"
                width={400}
                height={300}
                className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 hover:translate-x-4 hover:translate-y-4"
              />
            
            <div className="mt-4 text-center">
              <span className="text-white text-xl sm:text-2xl font-bold">Hospital Management</span>
            </div>
          </div>

          {/* Project 4: Social Event Planner */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden">
            
              <Image
                src="/event planner.webp" // Replace with your image path
                alt="Social Event Planner"
                width={400}
                height={300}
                className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 hover:translate-x-4 hover:translate-y-4"
              />
            
            <div className="mt-4 text-center">
              <span className="text-white text-xl sm:text-2xl font-bold">Social Event Planner</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
