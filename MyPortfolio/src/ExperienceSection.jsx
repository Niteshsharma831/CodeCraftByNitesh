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

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaBriefcase, FaGraduationCap, FaCode, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
// import { GiRocket } from "react-icons/gi";
// import { BsFillPatchCheckFill } from "react-icons/bs";

// const experiences = [
//   {
//     title: "Full Stack Developer",
//     company: "Angel Shark IT Solutions",
//     duration: "Dec 2025 - Present",
//     description: "Developing scalable MERN stack applications, designing REST APIs, and implementing responsive UI/UX while collaborating in Agile teams to deliver production software.",
//     type: "work",
//     tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS", "Agile"],
//     location: "Remote",
//     current: true,
//     achievements: ["Developed 3+ production applications", "Improved API response time by 40%", "Mentored 2 junior developers"]
//   },
//   {
//     title: "Frontend & Full Stack Developer",
//     company: "HireOnWorkBridge",
//     duration: "Jan 2025 - Present",
//     description: "Developed a full-stack platform for freelancers and clients using React, Node.js, Express, MongoDB, Tailwind CSS, and JWT authentication with dashboards and notifications.",
//     type: "work",
//     tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind", "Socket.io"],
//     location: "Remote",
//     achievements: ["Built real-time chat system", "Implemented secure payment gateway", "Achieved 95% client satisfaction"]
//   },
//   {
//     title: "Full Stack Developer",
//     company: "Shopizo (Job Portal)",
//     duration: "Jun 2024 - Dec 2024",
//     description: "Built a job posting and application system with dynamic dashboards, responsive UI, and email notifications using React, Node.js, Express, MongoDB, and Tailwind CSS.",
//     type: "work",
//     tech: ["React", "Node.js", "Express", "MongoDB", "EmailJS", "REST API"],
//     location: "Remote",
//     achievements: ["Reduced application processing time by 60%", "Implemented advanced filtering system", "Built admin dashboard"]
//   },
//   {
//     title: "Portfolio Website",
//     company: "Personal Project",
//     duration: "Mar 2024 - May 2024",
//     description: "Created a responsive portfolio website with React, Tailwind CSS, and Framer Motion animations showcasing projects, skills, and contact info.",
//     type: "work",
//     tech: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design", "UI/UX"],
//     location: "Personal",
//     achievements: ["98+ PageSpeed score", "Fully responsive design", "Interactive animations"]
//   },
//   {
//     title: "B.Tech Computer Science Engineering",
//     company: "RK University",
//     duration: "2022 - 2026",
//     description: "Completed B.Tech in Computer Science Engineering with a focus on software development, web technologies, and full-stack development.",
//     type: "education",
//     achievements: ["CGPA: 8.5/10", "Specialization in Web Technologies", "Active in coding competitions"],
//     honors: ["Dean's List 2023", "Best Project Award 2024"]
//   },
// ];

// const ExperienceSection = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // Filter experiences based on active tab
//   const filteredExperiences = activeTab === "all"
//     ? experiences
//     : experiences.filter(exp => exp.type === activeTab);

//   return (
//     <section
//       id="experience"
//       className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white overflow-hidden"
//     >
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-10 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-yellow-400/3 rounded-full blur-3xl"></div>
//         <div className="absolute top-40 right-1/3 w-32 h-32 bg-yellow-400/2 rounded-full blur-2xl"></div>
//         {/* Timeline line effect */}
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent hidden lg:block"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
//             <FaCode className="text-yellow-400" />
//             <span className="text-sm text-gray-300">Career Journey</span>
//           </div>
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Experience & </span>
//             <span className="text-yellow-400 relative">
//               Timeline
//               <motion.span
//                 className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 viewport={{ once: true }}
//               />
//             </span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             My professional journey and educational background in software development
//           </p>
//         </motion.div>

//         {/* Filter Tabs */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="flex justify-center gap-2 mb-12"
//         >
//           {["all", "work", "education"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
//                 activeTab === tab
//                   ? "bg-yellow-400 text-black"
//                   : "bg-zinc-800/50 text-gray-300 hover:bg-zinc-700/50"
//               }`}
//             >
//               {tab === "all" && <GiRocket />}
//               {tab === "work" && <FaBriefcase />}
//               {tab === "education" && <FaGraduationCap />}
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Main Timeline Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-400 h-full rounded-full hidden lg:block"></div>

//           {/* Timeline Items */}
//           <div className="space-y-12 lg:space-y-16">
//             {filteredExperiences.map((exp, idx) => {
//               const isLeft = idx % 2 === 0;

//               return (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   transition={{ duration: 0.6, delay: idx * 0.1 }}
//                   onMouseEnter={() => setHoveredCard(idx)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   className={`relative flex flex-col lg:flex-row items-center lg:items-start ${
//                     isLeft ? "lg:flex-row-reverse" : ""
//                   }`}
//                 >
//                   {/* Timeline Node */}
//                   <motion.div
//                     animate={{
//                       scale: hoveredCard === idx ? 1.3 : 1,
//                       boxShadow: hoveredCard === idx ? "0 0 20px rgba(251, 191, 36, 0.5)" : "0 0 0px rgba(251, 191, 36, 0)",
//                     }}
//                     className="relative z-10 bg-zinc-900 border-2 border-yellow-400 rounded-full p-4 shadow-lg"
//                   >
//                     {exp.type === "work" ? (
//                       <FaBriefcase className="text-yellow-400 text-xl" />
//                     ) : (
//                       <FaGraduationCap className="text-yellow-400 text-xl" />
//                     )}

//                     {/* Current Work Glow Effect */}
//                     {exp.current && (
//                       <motion.div
//                         animate={{
//                           scale: [1, 1.2, 1],
//                           opacity: [0.7, 0.3, 0.7],
//                         }}
//                         transition={{
//                           duration: 2,
//                           repeat: Infinity,
//                         }}
//                         className="absolute inset-0 rounded-full border-2 border-yellow-400"
//                       />
//                     )}
//                   </motion.div>

//                   {/* Timeline Card */}
//                   <motion.div
//                     animate={{
//                       x: hoveredCard === idx ? (isLeft ? -10 : 10) : 0,
//                       scale: hoveredCard === idx ? 1.02 : 1,
//                     }}
//                     className={`lg:w-5/12 mt-6 lg:mt-0 ${
//                       isLeft ? "lg:mr-12" : "lg:ml-12"
//                     }`}
//                   >
//                     <div className={`relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-6 shadow-2xl shadow-black/50 overflow-hidden ${
//                       exp.current ? "border-yellow-400/30" : ""
//                     }`}>
//                       {/* Current Work Badge */}
//                       {exp.current && (
//                         <div className="absolute top-4 right-4">
//                           <div className="flex items-center gap-1 bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
//                             <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
//                             Current
//                           </div>
//                         </div>
//                       )}

//                       {/* Card Header */}
//                       <div className="mb-4">
//                         <div className="flex items-center justify-between mb-2">
//                           <div>
//                             <h3 className="text-xl font-bold text-white">{exp.title}</h3>
//                             <div className="flex items-center gap-2 text-yellow-400 mt-1">
//                               <span className="text-sm">{exp.company}</span>
//                               {exp.type === "work" && exp.company !== "Personal Project" && (
//                                 <BsFillPatchCheckFill className="text-xs" />
//                               )}
//                             </div>
//                           </div>
//                           {exp.type === "work" && exp.company === "Angel Shark IT Solutions" && (
//                             <GiRocket className="text-2xl text-yellow-400" />
//                           )}
//                         </div>

//                         {/* Location and Duration */}
//                         <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
//                           <div className="flex items-center gap-1">
//                             <FaCalendarAlt className="text-yellow-400" />
//                             <span>{exp.duration}</span>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <FaMapMarkerAlt className="text-yellow-400" />
//                             <span>{exp.location}</span>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Description */}
//                       <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

//                       {/* Tech Stack */}
//                       {exp.tech && (
//                         <div className="mb-4">
//                           <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
//                           <div className="flex flex-wrap gap-2">
//                             {exp.tech.map((tech, techIdx) => (
//                               <span
//                                 key={techIdx}
//                                 className="px-3 py-1 bg-yellow-400/10 text-yellow-300 rounded-full text-xs border border-yellow-400/20"
//                               >
//                                 {tech}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {/* Achievements */}
//                       {exp.achievements && (
//                         <div className="mt-4 pt-4 border-t border-zinc-800/50">
//                           <p className="text-sm text-gray-400 mb-2">Key Achievements:</p>
//                           <ul className="space-y-2">
//                             {exp.achievements.map((achievement, aIdx) => (
//                               <li key={aIdx} className="flex items-start gap-2">
//                                 <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
//                                 <span className="text-sm text-gray-300">{achievement}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}

//                       {/* Honors for Education */}
//                       {exp.honors && (
//                         <div className="mt-4 p-3 bg-yellow-400/5 rounded-lg border border-yellow-400/10">
//                           <p className="text-sm text-yellow-400 mb-1">Honors & Awards:</p>
//                           <div className="flex flex-wrap gap-2">
//                             {exp.honors.map((honor, hIdx) => (
//                               <span
//                                 key={hIdx}
//                                 className="px-2 py-1 bg-yellow-400/20 text-yellow-300 rounded text-xs"
//                               >
//                                 {honor}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {/* Card Gradient Border Top */}
//                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-t-2xl"></div>
//                     </div>
//                   </motion.div>

//                   {/* Year Indicator for Desktop */}
//                   <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 mt-12">
//                     <div className="bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-1">
//                       <span className="text-xs text-yellow-400">
//                         {exp.duration.split(" ")[exp.duration.split(" ").length - 1]}
//                       </span>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Legend */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="mt-16 pt-8 border-t border-zinc-800/50"
//         >
//           <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//               <span>Work Experience</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
//               <span>Education</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
//               <span>Current Position</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//               <span>Personal Projects</span>
//             </div>
//           </div>
//         </motion.div>

//         {/* Career Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
//         >
//           {[
//             { label: "Years Experience", value: "2+", icon: "🕒" },
//             { label: "Projects Completed", value: "15+", icon: "📁" },
//             { label: "Clients Served", value: "10+", icon: "👥" },
//             { label: "Technologies", value: "12+", icon: "⚡" },
//           ].map((stat, idx) => (
//             <div key={idx} className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/30 rounded-xl p-4 text-center">
//               <div className="text-2xl mb-2">{stat.icon}</div>
//               <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
//               <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;
