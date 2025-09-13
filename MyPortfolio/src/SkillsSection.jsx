// SkillsSection.jsx
import React from "react";
import { motion } from "framer-motion";
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
  SiPostgresql,
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
        {/* Duplicate skill list twice for continuous flow */}
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
  return (
    <section
      id="skills"
      className="w-full py-16 text-white flex flex-col items-center relative"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-yellow-400">
        My Skills
      </h2>

      {/* --- Desktop Grid --- */}
      <div className="hidden sm:grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-6xl w-full px-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="border border-zinc-600 rounded-2xl p-4 bg-zinc-900/80 flex flex-col items-center text-center hover:scale-105 transition-transform shadow-md hover:shadow-yellow-400/40"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <h4 className="text-lg font-semibold text-yellow-400">
              {skill.name}
            </h4>
          </div>
        ))}
      </div>

      {/* --- Mobile Continuous Marquee --- */}
      <div className="flex flex-col gap-8 w-full sm:hidden relative">
        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-zinc-900 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-zinc-900 to-transparent z-20 pointer-events-none" />

        {/* 3 Continuous Rows */}
        <MarqueeRow direction="left" duration={20} />
        <MarqueeRow direction="right" duration={24} />
        <MarqueeRow direction="left" duration={28} />
      </div>
    </section>
  );
};

export default SkillsSection;
