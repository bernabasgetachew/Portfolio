'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const handleToggle = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

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
          {[
            {
              title: 'E-Commerce App',
              imgSrc: '/e-commerce.webp',
              link: 'https://github.com/bernabasgetachew/E-commerce-website.git',
              overlayContent: (
                <Image src="/github-logo.png" alt="GitHub Logo" width={50} height={50} />
              ),
            },
            {
              title: 'Hotel Booking Website',
              imgSrc: '/hotel.webp',
              link: 'https://github.com/bernabasgetachew/Hotel-Booking.git',
              overlayContent: (
                <Image src="/github-logo.png" alt="GitHub Logo" width={50} height={50} />
              ),
            },
            {
              title: 'Hospital Management',
              imgSrc: '/hospital_management.jpg',
              overlayContent: (
                <p className="text-white text-xl font-bold">{'School project'}</p>
              ),
            },
            {
              title: 'Social Event Planner',
              imgSrc: '/event planner.webp',
              overlayContent: (
                <p className="text-white text-xl font-bold">{'School Project'}</p>
              ),
            },
          ].map((project, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center overflow-hidden cursor-pointer transition-transform duration-500 ${
                        activeProject === index ? 'scale-110 translate-y-4' : 'hover:scale-105 hover:translate-y-2'
                        }`}
              onClick={() => handleToggle(index)}
            >
              <a href={project.link || '#'} target={project.link ? '_blank' : undefined} rel="noopener noreferrer">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                {/* Fixed Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  {project.overlayContent}
                </div>
              </a>
              <div className="mt-4 text-center">
                <span className="text-white text-xl sm:text-2xl font-bold">{project.title}</span>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
