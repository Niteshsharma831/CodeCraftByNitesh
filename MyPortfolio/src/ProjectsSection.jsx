import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HiringPortalImg from "./assets/HiringPortal.png";
import ShopizoImg from "./assets/ShopizoImg.png";
import PortfolioImg from "./assets/portfolioImg.png";

// Projects data
const projects = [
  {
    title: "Freelancing Platform",
    description:
      "A full-stack platform for freelancers and clients with JWT auth and dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: HiringPortalImg,
    github: "https://github.com/yourusername/freelance-platform",
    live: "https://hireonworkbridge.vercel.app/",
  },
  {
    title: "Job Portal",
    description:
      "A job posting and application system with user dashboards and notifications.",
    tech: ["React", "Node.js", "Express", "Tailwind"],
    image: ShopizoImg,
    github: "https://github.com/yourusername/job-portal",
    live: "https://shopizo-online.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Tailwind, and Framer Motion animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: PortfolioImg,
    github: "https://github.com/yourusername/portfolio",
    live: "https://niteshsharma831.github.io/portfolio/index.html",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="w-full py-20 bg-zinc-900 text-white flex flex-col items-center relative overflow-hidden"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-yellow-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl w-full px-4">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative rounded-3xl cursor-pointer group"
          >
            <motion.div
              className="relative border border-zinc-600 rounded-3xl p-1"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="bg-zinc-900/90 backdrop-blur-lg rounded-3xl overflow-hidden">
                <div className="p-3 sm:p-4 bg-zinc-800/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full 
                      h-40 sm:h-52 md:h-64 
                      object-cover rounded-xl shadow-md 
                      transition-transform duration-500 
                      group-hover:scale-105
                    "
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-yellow-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:scale-110 hover:shadow-lg transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition text-sm sm:text-base"
                    >
                      <FaGithub /> GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-yellow-400 text-black hover:bg-yellow-500 rounded transition text-sm sm:text-base"
                      >
                        <FaExternalLinkAlt /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* More Projects Button (optional) */}
      {/* <motion.button
        onClick={() => navigate("/projects")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition"
      >
        More Projects
      </motion.button> */}
    </section>
  );
};

export default ProjectsSection;
