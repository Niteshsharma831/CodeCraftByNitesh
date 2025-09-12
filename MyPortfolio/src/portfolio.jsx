// Hero.jsx
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import myPic from "./assets/MyImg.png";
import { motion } from "framer-motion";
import StatsSection from "./StatsSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import AboutMeSection from "./AboutMeSection";

import resumePdf from "./files/Nitesh_Sharma_Resume.pdf";

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

const Hero = () => {
  const projects = useCounter(18);
  const experience = useCounter(1);
  const feedback = useCounter(31);
  const team = useCounter(4);

  return (
    <div className="overflow-x-hidden">
      <div className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-4 sm:px-6 md:px-20 py-12 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
        {/* Background Circles */}
        <motion.div
          className="absolute top-0 left-0 w-28 sm:w-40 h-28 sm:h-40 rounded-full bg-purple-600 opacity-20 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-0 sm:right-10 w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-yellow-400 opacity-20 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

        {/* Left Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-5 z-20 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Hey, I’m{" "}
            <span className="text-yellow-400">Nitesh Kumar Sharma</span>
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-300">
            A software developer from India
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
            I build full-stack applications using React, Node.js, Express, and
            MongoDB.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center md:justify-start">
            <ScrollLink
              to="hireme"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition text-sm sm:text-base"
              >
                Hire Me
              </motion.button>
            </ScrollLink>

            <motion.a
              href={resumePdf}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition flex items-center justify-center text-sm sm:text-base"
            >
              Download Resume
            </motion.a>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="text-center w-24 sm:w-28">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow-400">
                {projects}+
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm">Projects</p>
            </div>
            <div className="text-center w-24 sm:w-28">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow-400">
                {experience}+
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm">Experience</p>
            </div>
            <div className="text-center w-24 sm:w-28">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow-400">
                {feedback}+
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm">Feedbacks</p>
            </div>
            <div className="text-center w-24 sm:w-28">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow-400">
                {team}+
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm">Team Members</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        {/* Right Image */}
        <motion.div className="relative w-full md:w-1/2 flex justify-center items-center z-20 mt-8 md:mt-0">
          {/* Bold, glowing diagonal border */}
          <motion.div
            className="
      absolute rotate-45 rounded-2xl 
      border-4 sm:border-6 md:border-8 
      border-purple-500 opacity-60 
      shadow-[0_0_40px_rgba(168,85,247,0.6)]
      w-[200px] h-[200px]       /* mobile */
      sm:w-[250px] sm:h-[250px] /* tablet */
      md:w-[350px] md:h-[350px] /* desktop */
    "
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* Profile Image */}
          <motion.img
            src={myPic}
            alt="Nitesh"
            className="
      relative 
      w-32 h-32         /* mobile */
      sm:w-48 sm:h-48   /* tablet */
      md:w-72 md:h-72   /* desktop */
      rounded-2xl shadow-2xl z-20 object-cover
    "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            whileHover={{
              scale: 1.08,
              rotate: 2,
              boxShadow: "0 0 30px #FACC15",
            }}
          />
        </motion.div>
      </div>

      {/* Sections */}
      <AboutMeSection />
      <StatsSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Hero;
