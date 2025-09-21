import { motion } from "framer-motion";

export default function ProjectCard({ image, title, stack, link, bullets, alt }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group grid grid-cols-1 sm:grid-cols-5 gap-4 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900"
    >
      <div className="sm:col-span-3">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="sm:col-span-2 p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-sm italic text-gray-600 dark:text-gray-400 pb-3">
          {stack} {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Live Link</a>
          )}
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          {bullets?.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}


