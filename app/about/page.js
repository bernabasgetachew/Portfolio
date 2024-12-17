import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-800 text-white min-h-screen">
      <main className="max-w-7xl mx-auto p-8">
        {/* About Title Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-200 italic">A passionate full-stack developer with a curious mind, always striving to improve and innovate.</p>
        </section>

        {/* Introduction Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-white mb-6">Introduction</h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              My name is <span className="text-gray-400">Bernabas Getachew</span>, a 22-year-old full-stack developer and computer engineering student from Addis Ababa University. I was born on August 14, 2002, in Tefki, Ethiopia. I am deeply passionate about using technology to solve problems and create meaningful impacts.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              I believe in the power of <span className="font-bold text-gray-400">empathy, curiosity,</span> and <span className="font-bold text-gray-400">problem-solving</span> to drive innovation in every project I undertake. Every day is an opportunity to improve, and I constantly seek out new challenges to grow my skills.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/bernabas.jpg" alt="Bernabas Getachew" width={150} height={150} className="rounded-full shadow-lg" />
          </div>
        </section>

        {/* Experience & Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6">Experience & Skills</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Over the years, I've honed my skills in both frontend and backend development, and I've worked with a variety of cutting-edge technologies. Here's a brief overview of my expertise:
          </p>

          <ul className="space-y-4 text-lg text-gray-200">
            <li><strong className="text-gray-400">Frontend Development</strong> (HTML, CSS, React, JavaScript, Next.js) – Building dynamic, user-friendly interfaces.</li>
            <li><strong className="text-gray-400">Backend Development</strong> (Express, Python, C++, Java) – Crafting robust server-side applications.</li>
            <li><strong className="text-gray-400">Databases</strong> (MySQL, MongoDB) – Managing and optimizing data for scalability and performance.</li>
            <li><strong className="text-gray-400">IoT Projects</strong> – Creating innovative connected solutions with microcontrollers and sensors.</li>
          </ul>

          <p className="text-lg text-gray-200 leading-relaxed mt-6">
            I constantly challenge myself to think critically and stay ahead of the curve in both development and problem-solving. I am committed to producing high-quality, impactful results.
          </p>
        </section>

        {/* Hobbies Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6">Hobbies</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Outside of programming, I enjoy engaging in activities that fuel my creativity and maintain a healthy balance:
          </p>

          <ul className="space-y-4 text-lg text-gray-200">
            <li><strong className="text-gray-400">Football</strong> – Watching football inspires me with its teamwork and strategy.</li>
            <li><strong className="text-gray-400">Reading</strong> – I have a deep love for reading, especially books on technology and personal growth.</li>
          </ul>
        </section>

        {/* Why I Love to Learn Section */}
        <section>
          <h2 className="text-3xl font-semibold text-white mb-6">Why I Love to Learn</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            I firmly believe that learning is a lifelong journey. Each challenge is an opportunity to grow, and I eagerly embrace every chance to expand my knowledge and capabilities. Whether through personal projects, collaboration with teams, or formal education, I continually strive to push the boundaries of what I can achieve.
          </p>
        </section>
      </main>
    </div>
  );
}
