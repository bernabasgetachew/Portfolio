'use client';

import Image from 'next/image';

export default function Resume() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-800 text-white min-h-screen px-4 sm:px-8">
      <main className="max-w-7xl mx-auto p-6 sm:p-8 pt-24 mt-20">
        {/* Resume Title Section */}
        <section className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Resume</h1>
          <p className="text-lg sm:text-xl text-gray-200 italic">
            Showcasing my journey, experience, and skills.
          </p>
        </section>

        {/* Education Section with Profile Image */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6">Education</h2>
            <ul className="space-y-4 sm:space-y-6 text-lg text-gray-200">
              <li>
                <h3 className="text-xl font-semibold">Kaleab School, Sebeta, Ethiopia</h3>
                <p className="text-gray-400">Nursery to Grade 12 (Graduated)</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold">Addis Ababa University (AAiT)</h3>
                <p className="text-gray-400">Degree Program (2021 - 2025)</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/bernabas.jpg"
              alt="Bernabas Getachew"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>
          <ul className="space-y-6 text-lg text-gray-200">
            {[
              {
                title: "Frontend Development",
                duration: "2020 - Present",
                description: "Building dynamic, user-friendly interfaces using modern web technologies like React and Next.js.",
              },
              {
                title: "Backend Development",
                duration: "2022 - Present",
                description: "Developing robust server-side applications with Node.js and Express as well as Next.js since it supports backend.",
              },
              {
                title: "Database Management",
                duration: "2022 - Present",
                description: "Designing and managing databases for scalable and efficient systems using MySQL and MongoDB.",
              },
              {
                title: "IoT Development",
                duration: "2023 - Present",
                description: "Creating innovative connected solutions with microcontrollers and sensors.",
              },
            ].map((exp, index) => (
              <li key={index}>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-400">{exp.duration}</p>
                <p className="text-gray-200">{exp.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="space-y-6">
            {[
              { skill: "Frontend Development (HTML, CSS, JavaScript, React, Next.js)", percentage: 85 },
              { skill: "Backend Development (Node.js, Express, Next.js)", percentage: 70 },
              { skill: "Database Management (MySQL, MongoDB)", percentage: 90 },
              { skill: "Version Control (Git)", percentage: 90 },
              { skill: "IoT Development", percentage: 70 },
            ].map(({ skill, percentage }, index) => (
              <div key={index}>
                <p className="text-lg font-medium">{skill}</p>
                <div className="w-full bg-gray-700 h-3 rounded">
                  <div
                    className="bg-gray-400 h-3 rounded"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-1">{percentage}%</p>
              </div>
            ))}
          </div>
        </section>

        
      </main>
    </div>
  );
}
