import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Angel Shark IT Solutions",
    duration: "Dec 2025 - Present",
    description:
      "Developing production-ready MERN stack applications using React.js, Node.js, Express.js, and MongoDB. Building REST APIs, responsive web interfaces, authentication features, and scalable software solutions while collaborating in Agile development workflows.",
    type: "work",
    location: "Remote",
    current: true,
  },
  {
    title: "Frontend & Full Stack Developer",
    company: "HireOnWorkBridge",
    duration: "Jan 2025 - Present",
    description:
      "Developed a full-stack freelancing platform connecting freelancers and clients using React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and JWT authentication. Built responsive dashboards, user features, notifications, and REST API integrations.",
    type: "work",
    location: "Remote",
  },
  {
    title: "Full Stack Developer",
    company: "Shopizo",
    duration: "Jun 2024 - Dec 2024",
    description:
      "Built a full-stack web application with React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Developed job posting and application features, dynamic dashboards, responsive interfaces, backend REST APIs, and email notification functionality.",
    type: "work",
    location: "Remote",
  },
  {
    title: "Full Stack Portfolio Developer",
    company: "Personal Project",
    duration: "Mar 2024 - May 2024",
    description:
      "Created a responsive developer portfolio using React.js, Tailwind CSS, and Framer Motion. Implemented modern web development practices to showcase software projects, technical skills, professional experience, and contact information.",
    type: "work",
    location: "Personal",
  },
  {
    title: "B.Tech Computer Science Engineering",
    company: "RK University",
    duration: "2022 - 2026",
    description:
      "Completed B.Tech in Computer Science Engineering with a focus on software development, web technologies, programming, databases, and full-stack application development.",
    type: "education",
    location: "India",
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: (isLeft) => ({
      opacity: 0,
      x: isLeft ? -60 : 60,
      scale: 0.92,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.7,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.4 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full py-20 sm:py-28 bg-[#0B1120] text-white flex flex-col items-center px-4 sm:px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
      />

      {/* Header */}
      <motion.div
        className="text-center mb-16 max-w-3xl"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.span
          className="inline-block px-4 py-2 mb-4 text-sm font-medium text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Professional Experience
        </motion.span>

        <motion.h2
          id="experience-heading"
          className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="text-white">Full Stack Developer</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
            Experience
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Professional experience in MERN stack development, React.js, Node.js,
          Express.js, MongoDB, REST APIs, and modern web application
          development.
        </motion.p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="relative w-full max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Center Line */}
        <motion.div
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400/50 via-orange-500/50 to-orange-400/50 transform -translate-x-1/2 hidden md:block"
          variants={lineVariants}
          aria-hidden="true"
        />

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <motion.article
              key={`${exp.company}-${exp.title}`}
              className={`relative flex flex-col md:flex-row mb-12 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              custom={isLeft}
              variants={cardVariants}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10"
                variants={dotVariants}
                aria-hidden="true"
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg shadow-orange-500/50 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-orange-400"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: idx * 0.15,
                  }}
                />
              </motion.div>

              {/* Content */}
              <div
                className={`pl-16 md:pl-0 w-full md:w-5/12 ${
                  isLeft ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <motion.div
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border ${
                    exp.current
                      ? "border-orange-400/40 shadow-lg shadow-orange-500/10"
                      : "border-white/10 hover:border-orange-400/20"
                  } transition-all duration-300`}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px -12px rgba(251,146,60,0.15)",
                    borderColor: "rgba(251,146,60,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Current Badge */}
                  {exp.current && (
                    <motion.span
                      className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-black bg-orange-400 rounded-full"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                      }}
                    >
                      ● Current
                    </motion.span>
                  )}

                  {/* Work / Education */}
                  <motion.div
                    className="flex items-center gap-3 mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        exp.type === "work"
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                      aria-hidden="true"
                    >
                      {exp.type === "work" ? (
                        <FaBriefcase size={18} />
                      ) : (
                        <FaGraduationCap size={18} />
                      )}
                    </div>

                    <span className="text-xs text-gray-400">
                      {exp.type === "work"
                        ? "Professional Experience"
                        : "Education"}
                    </span>
                  </motion.div>

                  {/* Job / Education Title */}
                  <motion.h3
                    className="text-xl font-bold text-white mb-1"
                    whileHover={{
                      background: "linear-gradient(to right, #FB923C, #F97316)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.title}
                  </motion.h3>

                  {/* Company */}
                  <motion.p
                    className="text-orange-400 font-medium mb-2"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {exp.company}
                  </motion.p>

                  {/* Duration & Location */}
                  <motion.div
                    className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      delay: 0.2 + idx * 0.05,
                    }}
                  >
                    <motion.span
                      className="flex items-center gap-1.5"
                      whileHover={{ x: 3 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                      }}
                    >
                      <FaCalendarAlt size={12} aria-hidden="true" />
                      <time>{exp.duration}</time>
                    </motion.span>

                    <motion.span
                      className="flex items-center gap-1.5"
                      whileHover={{ x: 3 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                      }}
                    >
                      <FaMapMarkerAlt size={12} aria-hidden="true" />
                      {exp.location}
                    </motion.span>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="text-gray-300 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      delay: 0.3 + idx * 0.05,
                    }}
                  >
                    {exp.description}
                  </motion.p>

                  {/* Current Job Tech Stack */}
                  {exp.current && (
                    <motion.div
                      className="mt-4 pt-4 border-t border-white/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                      }
                      transition={{
                        delay: 0.4 + idx * 0.05,
                      }}
                    >
                      <p className="text-xs text-gray-500 mb-2">Technologies</p>

                      <div className="flex flex-wrap gap-2">
                        {[
                          "React.js",
                          "Node.js",
                          "Express.js",
                          "MongoDB",
                          "REST APIs",
                          "Tailwind CSS",
                        ].map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 text-xs bg-orange-500/10 text-orange-300 rounded-full border border-orange-500/20"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(251,146,60,0.2)",
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Empty spacer for desktop */}
              <div className="hidden md:block w-5/12" />
            </motion.article>
          );
        })}
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-4xl"
        variants={statsVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[
          {
            label: "Projects Built",
            value: "15+",
            icon: "📁",
          },
          {
            label: "Happy Clients",
            value: "10+",
            icon: "🤝",
          },
          {
            label: "Technologies",
            value: "12+",
            icon: "⚡",
          },
          {
            label: "MERN Stack",
            value: "Full Stack",
            icon: "💻",
          },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
            whileHover={{
              y: -8,
              scale: 1.05,
              borderColor: "rgba(251,146,60,0.3)",
              boxShadow: "0 20px 40px -12px rgba(251,146,60,0.15)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="text-3xl mb-2"
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, 0],
              }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            >
              {stat.icon}
            </motion.div>

            <motion.div
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
              }
              transition={{
                delay: 0.6 + idx * 0.1,
                duration: 0.5,
              }}
            >
              {stat.value}
            </motion.div>

            <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
