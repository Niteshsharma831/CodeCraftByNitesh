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
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  { name: "CI/CD Pipeline", icon: <SiGitlab className="text-orange-400" /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full py-16 text-white flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-yellow-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-6xl w-full px-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="border border-zinc-600 rounded-2xl p-4 bg-zinc-900/80 backdrop-blur-lg flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer shadow-md hover:shadow-yellow-400/40"
          >
            <motion.div
              className="text-4xl mb-2"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              whileHover={{ rotate: 360 }}
            >
              {skill.icon}
            </motion.div>
            <h4 className="text-lg font-semibold text-yellow-400">
              {skill.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
