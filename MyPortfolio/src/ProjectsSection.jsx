import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import HiringPortalImg from "./assets/HiringPortal.png";
import ShopizoImg from "./assets/ShopizoImg.png";
import PortfolioImg from "./assets/portfolioImg.png";

// Projects data
const projects = [
  {
    title: "Freelancing Platform",
    description:
      "A full-stack freelancing platform connecting freelancers and clients with user authentication, dashboards, project management, JWT security, and a modern React and Node.js architecture.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: HiringPortalImg,
    imageAlt:
      "HireOnWorkBridge freelancing platform built with React Node.js and MongoDB",
    github: "https://github.com/NiteshSharma831",
    live: "https://hireonworkbridge.vercel.app/",
  },
  {
    title: "Shopizo — MERN eCommerce Platform",
    description:
      "A single-vendor MERN eCommerce platform built with React, Node.js, Express.js, and MongoDB featuring authentication, product management, cart, orders, order tracking, Razorpay payments, and responsive design.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: ShopizoImg,
    imageAlt:
      "Shopizo MERN eCommerce website built with React Node.js Express and MongoDB",
    github: "https://github.com/NiteshSharma831",
    live: "https://shopizo-online.vercel.app/",
  },
  {
    title: "Nitesh Kumar Sharma Portfolio",
    description:
      "A modern personal portfolio website built with React, Tailwind CSS, and Framer Motion to showcase full-stack development projects, technical skills, professional experience, and web development services.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: PortfolioImg,
    imageAlt:
      "Nitesh Kumar Sharma Full Stack and MERN Developer portfolio website",
    github: "https://github.com/NiteshSharma831",
    live: "https://devcraftnitesh.vercel.app/",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full py-20 bg-[#0B1120] text-white flex flex-col items-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-500/5 via-cyan-500/5 to-blue-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background:
              i % 3 === 0 ? "#FB923C" : i % 3 === 1 ? "#3B82F6" : "#14B8A6",
            opacity: 0.1,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 4 + 3,
            delay: Math.random() * 3,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
          transition: { duration: 0.6 },
        }}
      >
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-medium text-orange-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
            transition: { duration: 0.4, delay: 0.1 },
          }}
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          Featured Development Projects
        </motion.span>

        <motion.h2
          id="projects-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 bg-[length:200%_auto] animate-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
            transition: { duration: 0.4, delay: 0.2 },
          }}
        >
          Full Stack & MERN Projects
        </motion.h2>

        <motion.p
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isInView ? 1 : 0,
            transition: { duration: 0.4, delay: 0.3 },
          }}
        >
          Explore selected web development projects built with React.js,
          Node.js, Express.js, MongoDB, Tailwind CSS, JWT authentication, REST
          APIs, and modern full-stack technologies.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl w-full px-4">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            className="relative group"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 50,
              scale: isInView ? 1 : 0.95,
              transition: {
                duration: 0.6,
                delay: idx * 0.15,
                type: "spring",
                stiffness: 200,
              },
            }}
          >
            <motion.div
              className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-400/30 transition-all duration-500 overflow-hidden"
              whileHover={{
                y: -10,
                boxShadow: "0 30px 60px -12px rgba(251,146,60,0.15)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "conic-gradient(from 0deg, #FB923C, #3B82F6, #14B8A6, #FB923C)",
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
                aria-hidden="true"
              />

              <div className="relative bg-[#0B1120] rounded-3xl overflow-hidden">
                {/* Image Container */}
                <div className="relative overflow-hidden group">
                  <div className="p-3 sm:p-4 bg-gradient-to-b from-white/5 to-transparent">
                    <motion.img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="
                        w-full
                        h-40 sm:h-52 md:h-64
                        object-cover rounded-xl
                        transition-all duration-700
                        group-hover:scale-110
                      "
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        scale: isInView ? 1 : 0.8,
                        transition: {
                          duration: 0.5,
                          delay: 0.2 + idx * 0.15,
                        },
                      }}
                    />

                    {/* Image Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      aria-hidden="true"
                    />

                    {/* Image Shine Effect */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)",
                      }}
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut",
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Tech Stack Pills on Image */}
                  <motion.div
                    className="absolute top-4 right-4 flex flex-wrap gap-1 justify-end"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      x: isInView ? 0 : 20,
                      transition: {
                        duration: 0.4,
                        delay: 0.3 + idx * 0.15,
                      },
                    }}
                    aria-label={`${project.title} technologies`}
                  >
                    {project.tech.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-black/50 backdrop-blur-sm text-[10px] font-medium text-white/80 rounded-lg border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}

                    {project.tech.length > 2 && (
                      <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-[10px] font-medium text-white/80 rounded-lg border border-white/10">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <motion.h3
                    className="text-xl sm:text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      transition: {
                        duration: 0.4,
                        delay: 0.4 + idx * 0.15,
                      },
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      transition: {
                        duration: 0.4,
                        delay: 0.5 + idx * 0.15,
                      },
                    }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technology Stack */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      transition: {
                        duration: 0.4,
                        delay: 0.6 + idx * 0.15,
                      },
                    }}
                    aria-label={`${project.title} technology stack`}
                  >
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-xs sm:text-sm font-medium border border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Project Links */}
                  <motion.div
                    className="flex flex-wrap gap-3 sm:gap-4"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      transition: {
                        duration: 0.4,
                        delay: 0.7 + idx * 0.15,
                      },
                    }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-lg transition-all duration-300 text-sm sm:text-base border border-white/10 hover:border-white/20 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub
                        aria-hidden="true"
                        className="group-hover:rotate-12 transition-transform duration-300"
                      />
                      GitHub
                    </motion.a>

                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-black hover:shadow-lg hover:shadow-orange-500/25 rounded-lg transition-all duration-300 text-sm sm:text-base group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt
                          aria-hidden="true"
                          className="group-hover:rotate-45 transition-transform duration-300"
                        />
                        Live Demo
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>

      {/* View All Projects */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
          transition: { duration: 0.5, delay: 0.8 },
        }}
      >
        <Link
          to="/projects"
          aria-label="View all of Nitesh Kumar Sharma's development projects"
          className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-2 group"
        >
          <span>View All Projects</span>

          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            aria-hidden="true"
          >
            →
          </motion.span>
        </Link>
      </motion.div>

      {/* Decorative Bottom Line */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        animate={{
          width: ["0%", "33%", "0%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
    </section>
  );
};

export default ProjectsSection;
