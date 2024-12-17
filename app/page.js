export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-black to-gray-800 text-white relative">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/profile-photo.jpg')" }}></div>

      {/* Main Content */}
      <div className="relative z-10 text-center p-6 bg-black bg-opacity-60 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 text-shadow">Hi, I'm <span className="text-gray-400">Bernabas Getachew</span></h1>
        <h2 className="text-3xl font-medium mb-6">A Full Stack Developer</h2>
        <p className="text-xl font-semibold mt-4">I'm passionate about creating innovative solutions and constantly improving my skills!</p>
        
        <p className="text-lg italic mb-4 mt-4">"The best way to predict the future is to invent it."</p>
      </div>
    </div>
  );
}
