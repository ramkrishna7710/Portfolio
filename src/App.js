import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false); 

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white text-black dark:bg-gray-950 dark:text-white min-h-screen">
        
        {/* pass props to navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;