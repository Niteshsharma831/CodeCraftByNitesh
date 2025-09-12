import React from "react";
import { motion } from "framer-motion";
import myPic from "./assets/MyImg.png";

const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="w-full py-24 bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20"
    >
      {/* Left: Profile Image */}
      <motion.div
        className="md:w-1/2 flex justify-center relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Glow behind image */}
        <div
          className="
            absolute -bottom-4 -right-4
            w-40 h-40       /* mobile */
            sm:w-56 sm:h-56 /* tablet */
            md:w-80 md:h-80 /* desktop */
            bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 
            blur-3xl opacity-30 z-0
          "
        ></div>

        {/* Profile Image */}
        <motion.img
          src={myPic}
          alt="Nitesh"
          className="
            relative 
            w-40 h-40       /* mobile */
            sm:w-56 sm:h-56 /* tablet */
            md:w-80 md:h-80 /* desktop */
            object-cover rounded-2xl shadow-2xl z-10 
            transform -rotate-3 hover:rotate-0 hover:scale-105 
            transition-all duration-500
          "
        />
      </motion.div>

      {/* Right: Diagonal Text Card */}
      <motion.div
        className="md:w-1/2 bg-zinc-800/50 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-transparent hover:border-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 transform -rotate-3 hover:rotate-0 transition-all duration-500 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Floating gradient highlight */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full opacity-20 blur-2xl pointer-events-none"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-4">
          About Me
        </h2>

        <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-3">
          Hi! I’m{" "}
          <span className="text-yellow-400 font-semibold">
            Nitesh Kumar Sharma
          </span>
          , a passionate software developer from India. I build responsive and
          interactive web applications using modern tools like React, Node.js,
          Express, and MongoDB.
        </p>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">
          I enjoy creating practical software solutions such as dashboards, job
          portals, and freelancing platforms, focusing on clean code and smooth
          user experiences.
        </p>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Outside of coding, I explore modern UI/UX trends and continuously
          improve my designs to make them more appealing and engaging.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMeSection;
