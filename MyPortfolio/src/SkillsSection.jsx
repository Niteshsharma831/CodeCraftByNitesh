// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
// } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiTailwindcss,
//   SiExpress,
//   SiFramer,
//   SiBootstrap,
//   SiFlutter,
//   SiDocker,
//   SiGitlab,
//   SiMysql,
//   SiPostgresql,
//   SiNextdotjs
// } from "react-icons/si";

// const skills = [
//   { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//   { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
//   { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
//   { name: "React", icon: <FaReact className="text-blue-400" /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
//   { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
//   { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//   { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
//   { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
//   { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
//   { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
//   { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
//   { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
//   { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
//   { name: "CI/CD Pipeline", icon: <SiGitlab className="text-orange-400" /> },
//   { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
// ];

// // Reusable Marquee Row
// const MarqueeRow = ({ direction = "left", duration = 20 }) => {
//   return (
//     <div className="overflow-hidden relative w-full">
//       <motion.div
//         className="flex gap-8 w-max"
//         animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
//         transition={{ repeat: Infinity, duration, ease: "linear" }}
//       >
//         {/* Duplicate skill list twice for continuous flow */}
//         {[...Array(2)].map((_, i) => (
//           <div key={i} className="flex gap-8">
//             {skills.map((skill, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center min-w-[100px] hover:scale-110 transition-transform"
//               >
//                 <div className="text-4xl mb-1">{skill.icon}</div>
//                 <span className="text-sm text-yellow-400">{skill.name}</span>
//               </div>
//             ))}
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// const SkillsSection = () => {
//   return (
//     <section
//       id="skills"
//       className="w-full py-16 text-white flex flex-col items-center relative"
//     >
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-yellow-400">
//         My Skills
//       </h2>

//       {/* --- Desktop Grid --- */}
//       <div className="hidden sm:grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-6xl w-full px-4">
//         {skills.map((skill, idx) => (
//           <div
//             key={idx}
//             className="border border-zinc-600 rounded-2xl p-4 bg-zinc-900/80 flex flex-col items-center text-center hover:scale-105 transition-transform shadow-md hover:shadow-yellow-400/40"
//           >
//             <div className="text-4xl mb-2">{skill.icon}</div>
//             <h4 className="text-lg font-semibold text-yellow-400">
//               {skill.name}
//             </h4>
//           </div>
//         ))}
//       </div>

//       {/* --- Mobile Continuous Marquee --- */}
//       <div className="flex flex-col gap-8 w-full sm:hidden relative">
//         {/* Fade edges */}
//         <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-zinc-900 to-transparent z-20 pointer-events-none" />
//         <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-zinc-900 to-transparent z-20 pointer-events-none" />

//         {/* 3 Continuous Rows */}
//         <MarqueeRow direction="left" duration={20} />
//         <MarqueeRow direction="right" duration={24} />
//         <MarqueeRow direction="left" duration={28} />
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;


import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiFramer,
  SiBootstrap,
  SiFlutter,
  SiDocker,
  SiGitlab,
  SiMysql,
  SiPostgresql,
  SiNextdotjs
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  { name: "CI/CD Pipeline", icon: <SiGitlab className="text-orange-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
];

// Reusable Marquee Row
const MarqueeRow = ({ direction = "left", duration = 20 }) => {
  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[100px] hover:scale-110 transition-transform"
              >
                <div className="text-4xl mb-1">{skill.icon}</div>
                <span className="text-sm text-yellow-400">{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full py-16 bg-[#0B1120] text-white flex flex-col items-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-orange-500/5 via-cyan-500/5 to-blue-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#FB923C' : i % 3 === 1 ? '#3B82F6' : '#14B8A6',
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
        />
      ))}

      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
          transition: { duration: 0.6 }
        }}
      >
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-medium text-orange-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
            transition: { duration: 0.4, delay: 0.1 }
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          Expertise
        </motion.span>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 bg-[length:200%_auto] animate-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
            transition: { duration: 0.4, delay: 0.2 }
          }}
        >
          My Skills
        </motion.h2>

        <motion.p
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            transition: { duration: 0.4, delay: 0.3 }
          }}
        >
          Technologies and tools I work with to build amazing applications
        </motion.p>
      </motion.div>

      {/* --- Desktop Grid --- */}
      <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl w-full px-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center hover:border-orange-400/30 transition-all duration-500 group overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ 
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30,
              scale: isInView ? 1 : 0.9,
              transition: { 
                duration: 0.4, 
                delay: idx * 0.05,
                type: "spring",
                stiffness: 200
              }
            }}
            whileHover={{ 
              scale: 1.08,
              y: -5,
              boxShadow: "0 20px 40px -12px rgba(251,146,60,0.15)"
            }}
          >
            {/* Glowing Border Animation */}
            <motion.div
              className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "conic-gradient(from 0deg, #FB923C, #3B82F6, #14B8A6, #FB923C)",
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear"
              }}
            />

            <div className="relative z-10">
              <motion.div 
                className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <h4 className="text-lg font-semibold text-yellow-400 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h4>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute -inset-8 rounded-full bg-gradient-to-r from-orange-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* --- Mobile Continuous Marquee --- */}
      <div className="flex flex-col gap-8 w-full sm:hidden relative">
        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#0B1120] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#0B1120] to-transparent z-20 pointer-events-none" />

        {/* 3 Continuous Rows */}
        <MarqueeRow direction="left" duration={20} />
        <MarqueeRow direction="right" duration={24} />
        <MarqueeRow direction="left" duration={28} />
      </div>

      {/* Decorative Bottom Line */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        animate={{
          width: ["0%", "33%", "0%"],
          opacity: [0, 1, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default SkillsSection;