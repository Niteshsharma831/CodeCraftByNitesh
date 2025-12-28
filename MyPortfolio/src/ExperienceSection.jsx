import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Angel Shark IT Solutions",
    duration: "Dec 2025 - Present",
    description:
      "Developing scalable MERN stack applications, designing REST APIs, and implementing responsive UI/UX while collaborating in Agile teams to deliver production software.",
    type: "work",
  },
  {
    title: "Frontend & Full Stack Developer",
    company: "HireOnWorkBridge (Freelancing Platform)",
    duration: "Jan 2025 - Present",
    description:
      "Developed a full-stack platform for freelancers and clients using React, Node.js, Express, MongoDB, Tailwind CSS, and JWT authentication with dashboards and notifications.",
    type: "work",
  },
  {
    title: "Full Stack Developer",
    company: "Shopizo (Job Portal)",
    duration: "Jun 2024 - Dec 2024",
    description:
      "Built a job posting and application system with dynamic dashboards, responsive UI, and email notifications using React, Node.js, Express, MongoDB, and Tailwind CSS.",
    type: "work",
  },
  {
    title: "Portfolio Website",
    company: "Personal Project",
    duration: "Mar 2024 - May 2024",
    description:
      "Created a responsive portfolio website with React, Tailwind CSS, and Framer Motion animations showcasing projects, skills, and contact info.",
    type: "work",
  },
  {
    title: "B.Tech Computer Science Engineering",
    company: "RK University",
    duration: "2022 - 2026",
    description:
      "Completed B.Tech in Computer Science Engineering with a focus on software development, web technologies, and full-stack development.",
    type: "education",
  },
];

const ExperienceSection = () => {
  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setScrollDir("down");
      else setScrollDir("up");
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      className="w-full py-16 sm:py-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white flex flex-col items-center px-4 sm:px-6 md:px-20"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-yellow-400 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Experience & Timeline
      </motion.h2>

      <div className="relative w-full max-w-5xl">
        {/* Vertical timeline for desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-400 h-full rounded-full hidden md:block" />

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;

          const variants = {
            hidden: { opacity: 0, x: isLeft ? -100 : 100, y: 50 },
            visible: {
              opacity: 1,
              x: 0,
              y: 0,
              transition: { type: "spring", stiffness: 100, damping: 20 },
            },
          };

          const scrollVariants =
            scrollDir === "down"
              ? variants
              : {
                  hidden: { opacity: 0, x: isLeft ? 100 : -100, y: -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { type: "spring", stiffness: 100, damping: 20 },
                  },
                };

          return (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={scrollVariants}
              className="relative flex flex-col md:flex-row md:items-center mb-12 sm:mb-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2 bg-yellow-400 text-zinc-900 rounded-full p-3 sm:p-4 shadow-lg z-10">
                {exp.type === "work" ? (
                  <FaBriefcase size={18} />
                ) : (
                  <FaGraduationCap size={18} />
                )}
              </div>

              {/* Card */}
              <div
                className={`bg-zinc-900/80 backdrop-blur-lg rounded-3xl p-4 sm:p-6 md:w-5/12 shadow-2xl hover:shadow-yellow-400/60 transition-all transform hover:-translate-y-1 hover:scale-105 mt-12 md:mt-0 ${
                  isLeft ? "md:mr-auto md:text-left" : "md:ml-auto md:text-left"
                } ${
                  exp.company === "Angel Shark IT Solutions"
                    ? "border-2 border-yellow-400/50"
                    : ""
                }`}
              >
                {exp.company === "Angel Shark IT Solutions" && (
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-zinc-900 text-xs font-bold px-2 py-1 rounded-full">
                    Current
                  </div>
                )}
                <motion.h3
                  className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 mb-1 sm:mb-2"
                  whileHover={{ scale: 1.05, color: "#FACC15" }}
                >
                  {exp.title}
                </motion.h3>
                <p className="text-gray-300 italic mb-1 text-sm sm:text-base">
                  {exp.company}
                </p>
                <span className="text-gray-400 text-xs sm:text-sm">
                  {exp.duration}
                </span>
                <p className="mt-2 text-gray-300 text-sm sm:text-base">
                  {exp.description}
                </p>

                {/* Tech stack for Angel Shark IT Solutions */}
                {exp.company === "Angel Shark IT Solutions" && (
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <p className="text-xs text-gray-400 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-yellow-400/20 text-yellow-300 rounded text-xs">
                        React
                      </span>
                      <span className="px-2 py-1 bg-yellow-400/20 text-yellow-300 rounded text-xs">
                        Node.js
                      </span>
                      <span className="px-2 py-1 bg-yellow-400/20 text-yellow-300 rounded text-xs">
                        Express
                      </span>
                      <span className="px-2 py-1 bg-yellow-400/20 text-yellow-300 rounded text-xs">
                        MongoDB
                      </span>
                      <span className="px-2 py-1 bg-yellow-400/20 text-yellow-300 rounded text-xs">
                        REST APIs
                      </span>
                      <span className="px-2 py-1 bg-yellow-400/20 text-yellow-300 rounded text-xs">
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
