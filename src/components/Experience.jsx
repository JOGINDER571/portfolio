export default function Experience() {
  return (
    <section id="experience" className="px-4 md:px-8 lg:px-10 py-12 bg-gray-50 dark:bg-gray-900/40">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Work Experience</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="rounded-xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Offbeat Software Solutions Pvt. Ltd., Mohali Punjab</h3>
            <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-3">Nov 2024 - Present | Software Developer</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Created interactive map layers using ArcGIS, enhancing spatial data visualization.</li>
              <li>Integrated OpenAI LLMs to generate enriched, downloadable PDF reports from map data.</li>
              <li>Implemented Nearby Places feature using geospatial algorithms.</li>
              <li>Developed a chatbot for searching medical data with filters and tabular results.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">TrustyCoders, Mohali Punjab</h3>
            <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-3">Apr 2023 - Nov 2024 | Software Developer</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Built Category Ajax Filter Plugin in React for fast content filtering.</li>
              <li>Added Customizable Layout Builder with live previews.</li>
              <li>Enabled infinite scroll and lazy loading on a pharmacy web app.</li>
              <li>Developed real-time messaging system using Socket.io with read receipts and timestamps.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


