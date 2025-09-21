import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between" aria-label="Main Navigation">
        <a href="#hero" className="font-semibold tracking-tight text-lg text-gray-900 dark:text-gray-100">Joginder Sharma</a>
        <div className="flex items-center gap-3">
          <a aria-label="LinkedIn" href="https://linkedin.com/in/joginder-sharma-6154b71a0" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            <FaLinkedin className="text-xl" />
          </a>
          <a aria-label="GitHub" href="https://github.com/JOGINDER571" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            <FaGithub className="text-xl" />
          </a>
          <motion.button whileTap={{ scale: 0.95 }} onClick={toggleTheme} aria-label="Toggle dark mode" className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </motion.button>
        </div>
      </nav>
    </header>
  );
}


