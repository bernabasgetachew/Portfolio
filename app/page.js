export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-gray-800 text-white relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/profile-photo.jpg')" }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 text-center p-6 sm:p-8 bg-black bg-opacity-70 rounded-lg shadow-xl max-w-3xl w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-shadow">
          Hi, I'm <span className="text-gray-400">Bernabas Getachew</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium mb-6">
          A Full Stack Developer
        </h2>
        <p className="text-lg sm:text-xl font-semibold mb-4">
          I'm passionate about creating innovative solutions and constantly improving my skills!
        </p>
        <p className="text-md sm:text-lg italic text-gray-300">
          "The best way to predict the future is to invent it."
        </p>
      </div>
    </div>
  );
}
