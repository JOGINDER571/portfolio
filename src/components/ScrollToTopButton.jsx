import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollTopVisible } from "../hooks/useScrollTopVisible";

export default function ScrollToTopButton() {
  const visible = useScrollTopVisible(240);

  function onClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scrolltop"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.18 }}
          onClick={onClick}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}


