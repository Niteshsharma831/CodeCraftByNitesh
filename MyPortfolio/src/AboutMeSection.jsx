import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import myPic from "./assets/MyImg.png";

const AboutMeSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Force re-animation on mount
  useEffect(() => {
    if (sectionRef.current) {
      setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.style.opacity = "0.99";

          setTimeout(() => {
            if (sectionRef.current) {
              sectionRef.current.style.opacity = "1";
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
      aria-labelledby="about-heading"
      className="w-full py-24 bg-[#0B1120] text-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-orange-500/5 via-cyan-500/5 to-blue-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
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
            delay: 0.1,
          },
        }}
        viewport={{ once: true }}
      >
        {/* Multiple Glow Layers */}
        <motion.div
          className="absolute -inset-8 rounded-full bg-gradient-to-r from-orange-500/10 via-cyan-500/10 to-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -inset-4 rounded-2xl border-2 border-orange-400/20"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            },
            scale: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
          }}
        />

        <motion.div
          className="absolute -inset-8 rounded-2xl border border-cyan-400/10"
          animate={{
            rotate: -360,
            scale: [1, 1.03, 1],
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            },
            scale: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        />

        {/* Diagonal Border */}
        <motion.div
          className="absolute -inset-6 rotate-45 rounded-2xl border-4 border-purple-500/20"
          animate={{
            scale: [1, 1.06, 1],
            rotate: [45, 50, 45],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
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
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            />

            {/* Profile Image */}
            <motion.img
              src={myPic}
              alt="Nitesh Kumar Sharma - Full Stack and MERN Developer"
              className="
                relative 
                w-52 h-52
                sm:w-64 sm:h-64
                md:w-80 md:h-80
                object-cover
                transform transition-all duration-500
              "
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: {
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                  delay: 0.2,
                },
              }}
              whileHover={{
                scale: 1.05,
              }}
            />

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
              }}
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            />

            {/* Corner Decorations */}
            <motion.div
              className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-orange-400/50 rounded-tl-lg z-20"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg z-20"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: 0.5,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg z-20"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: 1,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-orange-400/50 rounded-br-lg z-20"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Floating Badges */}
          <motion.div
            className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-black px-4 py-2 rounded-full text-xs font-bold shadow-2xl z-30"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            🚀 Pro
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-2xl z-30"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: 0.5,
            }}
          >
            ⭐ 4.9 Rating
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right: Premium Glass Card */}
      <motion.div
        className="md:w-1/2 bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 hover:border-orange-400/30 transition-all duration-500 relative overflow-hidden"
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            delay: 0.1,
          },
        }}
        whileHover={{
          boxShadow: "0 30px 60px -12px rgba(251,146,60,0.15)",
        }}
        viewport={{ once: true }}
      >
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute -inset-10 bg-gradient-to-r from-orange-500/5 via-purple-500/5 to-cyan-500/5 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        />

        {/* Decorative Corner Glows */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: 1,
            ease: "easeInOut",
          }}
        />

        {/* Animated Border */}
        <motion.div
          className="absolute -inset-0.5 rounded-3xl opacity-30"
          style={{
            background:
              "conic-gradient(from 0deg, #FB923C, #3B82F6, #14B8A6, #FB923C)",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        />

        <div className="relative z-10">
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-orange-500/10 border border-orange-500/20 rounded-full"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.2,
              },
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>

            <span className="text-xs font-medium text-orange-400">
              About Nitesh Kumar Sharma
            </span>
          </motion.div>

          {/* SEO Heading */}
          <motion.h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 bg-[length:200%_auto] animate-gradient mb-6"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.3,
              },
            }}
          >
            About Nitesh Kumar Sharma
          </motion.h2>

          {/* Paragraph 1 */}
          <motion.p
            className="text-gray-300 text-sm md:text-base leading-relaxed mb-4"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.4,
              },
            }}
          >
            Hi! I'm{" "}
            <span className="text-orange-400 font-semibold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Nitesh Kumar Sharma
            </span>
            , a Full Stack Developer and MERN Stack Developer from India. I
            build modern, responsive and scalable web applications using
            React.js, Node.js, Express.js and MongoDB.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            className="text-gray-300 text-sm md:text-base leading-relaxed mb-4"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
          >
            My work includes full stack web development, REST API development,
            authentication systems, dashboards, job portals, freelancing
            platforms and eCommerce applications. I focus on building reliable
            solutions with clean code, responsive interfaces and practical
            business functionality.
          </motion.p>

          {/* Paragraph 3 */}
          <motion.p
            className="text-gray-300 text-sm md:text-base leading-relaxed"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.6,
              },
            }}
          >
            I work with modern JavaScript technologies and tools including
            React.js, Node.js, Express.js, MongoDB, Mongoose, Tailwind CSS, REST
            APIs, JWT authentication, Git and GitHub. I also develop custom
            websites and web applications for businesses, startups and clients
            looking for professional web development solutions.
          </motion.p>

          {/* Skill Tags */}
          <motion.div
            className="flex flex-wrap gap-2 mt-6"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.7,
              },
            }}
          >
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MERN Stack",
              "REST APIs",
              "Tailwind CSS",
            ].map((skill, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:bg-orange-500/20 hover:border-orange-400/30 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
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
