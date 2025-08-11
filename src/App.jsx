import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import aboutus from "./assets/arcgis.png";
import dcMngt from "./assets/dc-project-img.PNG";
import insta from "./assets/insta-img.PNG";
export default function Portfolio() {
  return (
    <div className="font-sans text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative">
        {/* Social Icons on Left Side */}
        <div className="absolute sm:left-4 top-4 sm:top-1/2 sm:-translate-y-1/2 flex sm:flex-col gap-4">
          <a
            href="https://linkedin.com/in/joginder-sharma-6154b71a0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl sm:text-6xl hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/JOGINDER571"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl sm:text-6xl hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Main Hero Content */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold tracking-wide"
        >
          Joginder Sharma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl md:text-3xl mt-4 leading-loose"
        >
          <span className="text-yellow-400">Full Stack Developer</span> |{" "}
          <span className="text-pink-400">2+ Years</span> of Experience
        </motion.p>

        <motion.a
          href="/Joginder_Resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg transition"
        >
          Download Resume
        </motion.a>
      </section>

      {/* About Section */}
      <section className="px-6 flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-10 md:px-20 bg-gray-900">
        <div className="content">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            Hi! I'm, a passionate{" "}
            <span className="text-emerald-400 font-medium">
              frontend developer
            </span>{" "}
            who thrives on building
            <span className="text-yellow-400 font-medium"> scalable</span>,{" "}
            <span className="text-yellow-400 font-medium">accessible</span>, and
            visually polished web applications. I specialize in{" "}
            <span className="text-blue-400 font-medium">JavaScript</span>,{" "}
            <span className="text-blue-400 font-medium">React.js</span>,{" "}
            <span className="text-blue-400 font-medium">Node.js</span>,
            <span className="text-purple-400 font-medium">Socket.io</span>,{" "}
            <span className="text-purple-400 font-medium">Webhook</span>,
            <span className="text-blue-400 font-medium">Tailwind CSS</span>, and{" "}
            <span className="text-yellow-400 font-medium">
              performance optimization
            </span>
            . I enjoy turning complex challenges into elegant user experiences.
            I’ve worked at companies like{" "}
            <strong className="text-pink-400">
              Offbeat Software Solutions
            </strong>{" "}
            and <strong className="text-pink-400">TrustyCoders</strong>, where I
            built dynamic and responsive web applications. Some of my key
            contributions include:
          </p>
          <ul className="list-disc ml-5 space-y-1 mt-4">
            <li>
              Created interactive map layers using{" "}
              <span className="text-indigo-400 font-medium">ArcGIS</span>,
              enhancing spatial data visualization.
            </li>
            <li>
              Integrated{" "}
              <span className="text-green-400 font-medium">OpenAI LLMs</span> to
              generate enriched, downloadable PDF reports from map data.
            </li>
            <li>
              Implemented{" "}
              <span className="text-yellow-400 font-medium">Nearby Places</span>{" "}
              feature using geospatial algorithms.
            </li>
            <li>
              Developed a{" "}
              <span className="text-teal-400 font-medium">chatbot</span> for
              searching medical data with filters and tabular results.
            </li>
            <li>
              Leading the development of a{" "}
              <span className="text-purple-400 font-medium">
                real-time messaging system
              </span>{" "}
              using modern frontend tools,{" "}
              <span className="text-purple-400 font-medium">Socket.io</span>,
              and RESTful APIs.
            </li>
            <li>
              Developing a{" "}
              <span className="text-orange-400 font-medium">
                Category Ajax Filter Plugin
              </span>{" "}
              and implementing features like{" "}
              <span className="text-orange-400 font-medium">
                infinite scroll
              </span>{" "}
              and{" "}
              <span className="text-orange-400 font-medium">lazy loading</span>,
              which significantly improved user experience.
            </li>
          </ul>
        </div>

        <div className="image">
          <img className="w-[100%] h-60" src={aboutus} alt="imhg" />
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="px-6 py-10 md:px-20 bg-gray-800">
        <h2 className="text-3xl font-semibold mb-6">Work Experience</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold">
            Offbeat Software Solutions Pvt. Ltd., Mohali Punjab
          </h3>
          <p className="text-sm italic mb-2">
            Nov 2024 - Present | Software Developer
          </p>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              Created interactive map layers using ArcGIS, enhancing spatial
              data visualization.
            </li>
            <li>
              Integrated OpenAI LLMs to generate enriched, downloadable PDF
              reports from map data.
            </li>
            <li>
              Implemented Nearby Places feature using geospatial algorithms.
            </li>
            <li>
              Developed a chatbot for searching medical data with filters and
              tabular results.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">TrustyCoders, Mohali Punjab</h3>
          <p className="text-sm italic mb-2">
            Apr 2023 - Nov 2024 | Software Developer
          </p>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              Built Category Ajax Filter Plugin in React for fast content
              filtering.
            </li>
            <li>Added Customizable Layout Builder with live previews.</li>
            <li>
              Enabled infinite scroll and lazy loading on a pharmacy web app.
            </li>
            <li>
              Developed real-time messaging system using Socket.io with read
              receipts and timestamps.
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-10 md:px-20 bg-gray-700">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        {/* <div className="mb-6">
          <h3 className="text-xl font-bold">SalonDekho</h3>
          <p className="text-sm italic">
            MERN Stack | Redux |{" "}
            <a
              href="https://salondekho.vercel.app/"
              target="_blank"
              className="text-blue-400 underline"
            >
              Live Link
            </a>
          </p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Streamlined salon booking for customers and owners.</li>
            <li>Used Redux for state management.</li>
          </ul>
        </div> */}

        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <div className="w-full sm:w-[60%]">
            <img src={dcMngt} alt="dc-project" />
          </div>
          <div className="w-full sm:w-[40%]">
            <h3 className="text-xl font-bold">
              Doctor Appointment Booking System
            </h3>
            <p className="text-sm italic pb-3">
              Full Stack |{" "}
              <a
                href="https://doctor-management-application.onrender.com/"
                target="_blank"
                className="text-blue-400 underline"
              >
                Live Link
              </a>
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Implemented role-based authentication for patients, doctors, and
                admin to ensure secure access control.
              </li>
              <li>
                Built features for appointment scheduling, profile management,
                earnings tracking, and admin-level doctor management.
              </li>
              <li>
                ntegrated Razorpay payment gateway for secure online appointment
                fee transactions.
              </li>
              <li>
                Structured the project with scalable folder architecture,
                utilized Context API and created custom hooks.
              </li>
              <li>
                Designed and developed by using React.js, Node.js, Express.js,
                PostgreSQL, and Prisma ORM.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mb-6 mt-10 md:mt-20">
          <div className="w-full sm:w-[60%]">
            <img src={insta} alt="dc-project" />
          </div>
          <div className="w-full sm:w-[40%]">
            <h3 className="text-xl font-bold">Instagram Clone</h3>
            <p className="text-sm italic pb-3">
              MERN Stack |{" "}
              <a
                href="https://instagram-frontend.vercel.app/"
                target="_blank"
                className="text-blue-400 underline"
              >
                Live Link
              </a>
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Implemented auth, image uploads, captions, likes, and comments.
              </li>
              <li>Core features of a social media app with engaging UX.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
