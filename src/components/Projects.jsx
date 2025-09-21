import dcMngt from "../assets/dc-project-img.PNG";
import insta from "../assets/insta-img.PNG";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-4 md:px-8 lg:px-10 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Projects</h2>
        <div className="grid grid-cols-1 gap-6">
          <ProjectCard
            image={dcMngt}
            alt="Doctor appointment app preview"
            title="Doctor Appointment Booking System"
            stack="Full Stack | "
            link="https://doctor-management-application.onrender.com/"
            bullets={[
              "Role-based authentication for patients, doctors, and admin.",
              "Appointment scheduling, profile management, earnings tracking, admin-level doctor management.",
              "Integrated Razorpay for secure payments.",
              "Scalable architecture with Context API and custom hooks.",
              "Built with React, Node, Express, PostgreSQL, Prisma.",
            ]}
          />
          <ProjectCard
            image={insta}
            alt="Instagram clone preview"
            title="Instagram Clone"
            stack="MERN Stack | "
            link="https://instagram-frontend.vercel.app/"
            bullets={[
              "Auth, image uploads, captions, likes, comments.",
              "Core social media features with engaging UX.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}


