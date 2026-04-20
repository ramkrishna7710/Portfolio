export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        
        <h1 className="text-xl font-bold">Ramkrishna Sharma</h1>

        <div className="flex items-center gap-4">
          {/* Links */}
          <div className="space-x-4 hidden md:block">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* 🔥 Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

      </div>
    </nav>
  );
}