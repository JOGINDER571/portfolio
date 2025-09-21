import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import BackgroundFX from "./components/BackgroundFX.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen text-gray-900 dark:text-gray-100 transition-colors">
      <BackgroundFX />
      <div className="relative z-10">
        <Navbar />
      </div>
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="relative z-10 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Joginder Sharma
      </footer>
      <div className="relative z-20">
        <ScrollToTopButton />
      </div>
    </div>
  );
}
