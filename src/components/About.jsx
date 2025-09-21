import aboutus from "../assets/arcgis.png";

export default function About() {
  return (
    <section id="about" className="px-4 md:px-8 lg:px-10 py-12">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">About Me</h2>
          <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
            Hi! I'm a passionate <span className="text-emerald-600 dark:text-emerald-400 font-medium">frontend developer</span> who thrives on building
            <span className="text-yellow-600 dark:text-yellow-400 font-medium"> scalable</span>,
            <span className="text-yellow-600 dark:text-yellow-400 font-medium"> accessible</span>, and visually polished web applications. I specialize in
            <span className="text-blue-600 dark:text-blue-400 font-medium"> JavaScript</span>,
            <span className="text-blue-600 dark:text-blue-400 font-medium"> React.js</span>,
            <span className="text-blue-600 dark:text-blue-400 font-medium"> Node.js</span>,
            <span className="text-purple-600 dark:text-purple-400 font-medium"> Socket.io</span>,
            <span className="text-purple-600 dark:text-purple-400 font-medium"> Webhook</span>,
            <span className="text-blue-600 dark:text-blue-400 font-medium"> Tailwind CSS</span>, and
            <span className="text-yellow-600 dark:text-yellow-400 font-medium"> performance optimization</span>.
          </p>
          <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 mt-4">
            I’ve worked at companies like <strong className="text-pink-600 dark:text-pink-400">Offbeat Software Solutions</strong> and <strong className="text-pink-600 dark:text-pink-400">TrustyCoders</strong>, building dynamic and responsive web applications. Key contributions include:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-4 text-gray-700 dark:text-gray-300">
            <li>Interactive map layers using <span className="font-medium text-indigo-600 dark:text-indigo-400">ArcGIS</span>.</li>
            <li>Integrated <span className="font-medium text-green-600 dark:text-green-400">OpenAI LLMs</span> to generate PDF reports from map data.</li>
            <li>Nearby Places using geospatial algorithms.</li>
            <li>Medical data search chatbot with filters and tabular results.</li>
            <li>Real-time messaging with <span className="font-medium text-purple-600 dark:text-purple-400">Socket.io</span> and REST APIs.</li>
            <li>Category Ajax Filter Plugin, infinite scroll, and lazy loading.</li>
          </ul>
        </div>
        <div>
          <img className="w-full h-60 object-cover rounded-lg shadow" src={aboutus} alt="ArcGIS project preview" />
        </div>
      </div>
    </section>
  );
}


