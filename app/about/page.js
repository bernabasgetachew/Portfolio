import Image from 'next/image';

export default function About() {
  const hobbies = [
    { title: "Football", description: "Watching football inspires me with its teamwork and strategy." },
    { title: "Reading", description: "I have a deep love for reading, especially books on technology and personal growth." },
  ];

  const skills = [
    { title: "Frontend Development", tools: "(HTML, CSS, React, JavaScript, Next.js)", description: "Building dynamic, user-friendly interfaces." },
    { title: "Backend Development", tools: "(Express, Python, C++, Java)", description: "Crafting robust server-side applications." },
    { title: "Databases", tools: "(MySQL, MongoDB)", description: "Managing and optimizing data for scalability and performance." },
    { title: "IoT Projects", description: "Creating innovative connected solutions with microcontrollers and sensors." },
  ];

  return (
    <div className="bg-gradient-to-r from-black to-gray-800 text-white min-h-screen">
      <main className="max-w-7xl mx-auto p-6 sm:p-8 pt-24 mt-20"> {/* Added pt-24 to ensure content appears below the navbar */}
        {/* About Title Section */}
        <section className="text-center mb-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-21">About Me</h1>
          <p className="text-base sm:text-xl text-gray-200 italic">
            A passionate full-stack developer with a curious mind, always striving to improve and innovate.
          </p>
        </section>

        {/* Introduction Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-14">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Introduction</h2>
            <p className="text-sm sm:text-lg leading-relaxed mb-4">
              My name is <span className="text-gray-400">Bernabas Getachew</span>, a 22-year-old full-stack developer and computer engineering student from Addis Ababa University. I was born on August 14, 2002, in Tefki, Ethiopia. I am deeply passionate about using technology to solve problems and create meaningful impacts.
            </p>
            <p className="text-sm sm:text-lg leading-relaxed">
              I believe in the power of <span className="font-bold text-gray-400">empathy, curiosity,</span> and <span className="font-bold text-gray-400">problem-solving</span> to drive innovation in every project I undertake.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/bernabas.jpg"
              alt="Bernabas Getachew"
              width={150}
              height={150}
              className="rounded-full shadow-lg"
            />
          </div>
        </section>

        {/* Experience & Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Experience & Skills</h2>
          <ul className="space-y-6 text-sm sm:text-lg">
            {skills.map((skill, index) => (
              <li key={index}>
                <h3 className="font-semibold text-gray-400">{skill.title}</h3>
                <p className="text-gray-200">{skill.tools}</p>
                <p className="text-gray-200">{skill.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Hobbies Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Hobbies</h2>
          <ul className="space-y-6 text-sm sm:text-lg">
            {hobbies.map((hobby, index) => (
              <li key={index}>
                <strong className="text-gray-400">{hobby.title}:</strong> {hobby.description}
              </li>
            ))}
          </ul>
        </section>

        {/* Why I Love to Learn Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Why I Love to Learn</h2>
          <p className="text-sm sm:text-lg leading-relaxed">
            I firmly believe that learning is a lifelong journey. Each challenge is an opportunity to grow, and I eagerly embrace every chance to expand my knowledge and capabilities.
          </p>
        </section>
      </main>
    </div>
  );
}
