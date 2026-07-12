// import React from "react";
// import { motion } from "framer-motion";
// import myPic from "./assets/MyImg.png";

// const AboutMeSection = () => {
//   return (
//     <section
//       id="about"
//       className="w-full py-24 bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20"
//     >
//       {/* Left: Profile Image (❌ hidden on mobile, ✅ visible on sm+) */}
//       <motion.div
//         className="hidden sm:flex md:w-1/2 justify-center relative"
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Glow behind image */}
//         <div
//           className="
//             absolute -bottom-4 -right-4
//             w-40 h-40
//             sm:w-56 sm:h-56
//             md:w-80 md:h-80
//             bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 
//             blur-3xl opacity-30 z-0
//           "
//         ></div>

//         {/* Profile Image */}
//         <motion.img
//           src={myPic}
//           alt="Nitesh"
//           className="
//             relative 
//             w-40 h-40
//             sm:w-56 sm:h-56
//             md:w-80 md:h-80
//             object-cover rounded-2xl shadow-2xl z-10 
//             transform -rotate-3 hover:rotate-0 hover:scale-105 
//             transition-all duration-500
//           "
//         />
//       </motion.div>

//       {/* Right: Diagonal Text Card */}
//       <motion.div
//         className="md:w-1/2 bg-zinc-800/50 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-transparent hover:border-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 transform -rotate-3 hover:rotate-0 transition-all duration-500 relative overflow-hidden"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Floating gradient highlight */}
//         <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full opacity-20 blur-2xl pointer-events-none"></div>

//         <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-4">
//           About Me
//         </h2>

//         <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-3">
//           Hi! I’m{" "}
//           <span className="text-yellow-400 font-semibold">
//             Nitesh Kumar Sharma
//           </span>
//           , a passionate software developer from India. I build responsive and
//           interactive web applications using modern tools like React, Node.js,
//           Express, and MongoDB.
//         </p>

//         <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">
//           I enjoy creating practical software solutions such as dashboards, job
//           portals, and freelancing platforms, focusing on clean code and smooth
//           user experiences.
//         </p>

//         <p className="text-gray-300 text-sm md:text-base leading-relaxed">
//           Outside of coding, I explore modern UI/UX trends and continuously
//           improve my designs to make them more appealing and engaging.
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default AboutMeSection;
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import myPic from "./assets/MyImg.png";

const AboutMeSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Force re-animation on mount
  useEffect(() => {
    if (sectionRef.current) {
      // Small delay to ensure animations trigger after mount
      setTimeout(() => {
        if (sectionRef.current) {
          // Trigger re-animation by toggling visibility
          sectionRef.current.style.opacity = '0.99';
          setTimeout(() => {
            if (sectionRef.current) {
              sectionRef.current.style.opacity = '1';
            }
          }, 10);
        }
      }, 100);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-24 bg-[#0B1120] text-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-orange-500/5 via-cyan-500/5 to-blue-500/5 blur-3xl"
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
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl"
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

      {/* Left: Profile Image with Premium Effects */}
      <motion.div
        className="hidden sm:flex md:w-1/2 justify-center relative"
        initial={{ opacity: 0, x: -80 }}
        animate={{ 
          opacity: 1,
          x: 0,
          transition: { 
            duration: 0.8, 
            type: "spring", 
            stiffness: 200,
            delay: 0.1
          }
        }}
        viewport={{ once: true }}
      >
        {/* Multiple Glow Layers */}
        <motion.div
          className="absolute -inset-8 rounded-full bg-gradient-to-r from-orange-500/10 via-cyan-500/10 to-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute -inset-4 rounded-2xl border-2 border-orange-400/20"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{
            rotate: { repeat: Infinity, duration: 20, ease: "linear" },
            scale: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
        />

        <motion.div
          className="absolute -inset-8 rounded-2xl border border-cyan-400/10"
          animate={{
            rotate: -360,
            scale: [1, 1.03, 1]
          }}
          transition={{
            rotate: { repeat: Infinity, duration: 25, ease: "linear" },
            scale: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }
          }}
        />

        {/* Diagonal Border */}
        <motion.div
          className="absolute -inset-6 rotate-45 rounded-2xl border-4 border-purple-500/20"
          animate={{
            scale: [1, 1.06, 1],
            rotate: [45, 50, 45],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
        />

        {/* Profile Image Container */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Animated Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-cyan-500/20 z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                background: [
                  "linear-gradient(to top right, rgba(251,146,60,0.2), transparent, rgba(20,184,166,0.2))",
                  "linear-gradient(to bottom left, rgba(251,146,60,0.2), transparent, rgba(20,184,166,0.2))",
                  "linear-gradient(to top right, rgba(251,146,60,0.2), transparent, rgba(20,184,166,0.2))",
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            />

            {/* Profile Image */}
            <motion.img
              src={myPic}
              alt="Nitesh"
              className="
                relative 
                w-52 h-52
                sm:w-64 sm:h-64
                md:w-80 md:h-80
                object-cover
                transform transition-all duration-500
              "
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ 
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { 
                  duration: 0.8, 
                  type: "spring", 
                  stiffness: 200,
                  delay: 0.2
                }
              }}
              whileHover={{
                scale: 1.05,
              }}
            />

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
              }}
              animate={{
                x: ["-100%", "200%"]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            />

            {/* Corner Decorations */}
            <motion.div
              className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-orange-400/50 rounded-tl-lg z-20"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg z-20"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: 0.5,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg z-20"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: 1,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-orange-400/50 rounded-br-lg z-20"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: 1.5,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Floating Badges */}
          <motion.div
            className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-black px-4 py-2 rounded-full text-xs font-bold shadow-2xl z-30"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🚀 Pro
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-2xl z-30"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
          >
            ⭐ 4.9 Rating
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right: Premium Glass Card */}
      <motion.div
        className="md:w-1/2 bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 hover:border-orange-400/30 transition-all duration-500 relative overflow-hidden"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ 
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { 
            duration: 0.8, 
            type: "spring", 
            stiffness: 200,
            delay: 0.1
          }
        }}
        whileHover={{
          boxShadow: "0 30px 60px -12px rgba(251,146,60,0.15)"
        }}
        viewport={{ once: true }}
      >
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute -inset-10 bg-gradient-to-r from-orange-500/5 via-purple-500/5 to-cyan-500/5 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }}
        />

        {/* Decorative Corner Glows */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: 1,
            ease: "easeInOut"
          }}
        />

        {/* Animated Border */}
        <motion.div
          className="absolute -inset-0.5 rounded-3xl opacity-30"
          style={{
            background: "conic-gradient(from 0deg, #FB923C, #3B82F6, #14B8A6, #FB923C)",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear"
          }}
        />

        <div className="relative z-10">
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-orange-500/10 border border-orange-500/20 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 }
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-medium text-orange-400">About Me</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 bg-[length:200%_auto] animate-gradient mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.3 }
            }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-300 text-sm md:text-base leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 }
            }}
          >
            Hi! I'm{" "}
            <span className="text-orange-400 font-semibold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Nitesh Kumar Sharma
            </span>
            , a passionate software developer from India. I build responsive and
            interactive web applications using modern tools like React, Node.js,
            Express, and MongoDB.
          </motion.p>

          <motion.p
            className="text-gray-300 text-sm md:text-base leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.5 }
            }}
          >
            I enjoy creating practical software solutions such as dashboards, job
            portals, and freelancing platforms, focusing on clean code and smooth
            user experiences.
          </motion.p>

          <motion.p
            className="text-gray-300 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.6 }
            }}
          >
            Outside of coding, I explore modern UI/UX trends and continuously
            improve my designs to make them more appealing and engaging.
          </motion.p>

          {/* Skill Tags */}
          <motion.div
            className="flex flex-wrap gap-2 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.7 }
            }}
          >
            {["React", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript"].map((skill, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:bg-orange-500/20 hover:border-orange-400/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMeSection;