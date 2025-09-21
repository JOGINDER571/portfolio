import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[88vh] flex flex-col justify-center items-center text-center px-4 relative">
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white"
      >
        Joginder Sharma
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="text-2xl md:text-3xl mt-4 text-gray-700 dark:text-gray-300"
      >
        <span className="text-blue-600 dark:text-blue-400">Full Stack Developer</span> · <span className="text-pink-600 dark:text-pink-400">2.5+ Years</span> of Experience
      </motion.p>
      <motion.a
        href="/Joginder_SDE_Resume.pdf"
        download
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 font-semibold shadow-sm transition-colors"
      >
        Download Resume
      </motion.a>
    </section>
  );
}


