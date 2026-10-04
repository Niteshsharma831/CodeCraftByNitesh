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
import resumePdf from "./files/MyUpdatedResumeNitesh.pdf";
import InteractiveCursor from "./components/InteractiveBackground";

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
    <InteractiveCursor>
      <div className="overflow-x-hidden">
        <div className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-4 sm:px-6 md:px-20 py-12 bg-[#0B1120] text-white overflow-hidden">
          {/* Deep Blue Organic Circle - Main Background */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(30, 58, 138, 0.4) 0%, rgba(11, 17, 32, 0) 70%)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          />

          {/* Warm Orange Gradient Blob */}
          <motion.div
            className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.05) 40%, transparent 70%)",
            }}
            animate={{
              x: [0, -50, 30, 0],
              y: [0, 30, -20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut",
            }}
          />

          {/* Soft Curved Stripes on Orange Blob */}
          <motion.div
            className="absolute top-1/3 right-10 w-64 h-64"
            animate={{
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 30, ease: "linear" },
              opacity: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <motion.path
                d="M 20 100 Q 60 40 100 100 T 180 100"
                stroke="#FB923C"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
                animate={{
                  d: [
                    "M 20 100 Q 60 40 100 100 T 180 100",
                    "M 20 100 Q 60 60 100 100 T 180 100",
                    "M 20 100 Q 60 40 100 100 T 180 100",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
              <motion.path
                d="M 20 130 Q 60 70 100 130 T 180 130"
                stroke="#FB923C"
                strokeWidth="1.5"
                fill="none"
                opacity="0.2"
                animate={{
                  d: [
                    "M 20 130 Q 60 70 100 130 T 180 130",
                    "M 20 130 Q 60 90 100 130 T 180 130",
                    "M 20 130 Q 60 70 100 130 T 180 130",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.path
                d="M 20 70 Q 60 10 100 70 T 180 70"
                stroke="#FB923C"
                strokeWidth="1.5"
                fill="none"
                opacity="0.2"
                animate={{
                  d: [
                    "M 20 70 Q 60 10 100 70 T 180 70",
                    "M 20 70 Q 60 30 100 70 T 180 70",
                    "M 20 70 Q 60 10 100 70 T 180 70",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </svg>
          </motion.div>

          {/* Teal Geometric Doodle Lines */}
          <motion.div
            className="absolute bottom-1/4 left-10 w-48 h-48"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 40, ease: "linear" },
              opacity: { repeat: Infinity, duration: 8, ease: "easeInOut" },
            }}
          >
            <svg viewBox="0 0 150 150" className="w-full h-full">
              {/* Geometric lines */}
              <motion.line
                x1="10"
                y1="75"
                x2="140"
                y2="75"
                stroke="#14B8A6"
                strokeWidth="1.5"
                opacity="0.3"
                animate={{
                  x1: [10, 20, 10],
                  x2: [140, 130, 140],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
              <motion.line
                x1="75"
                y1="10"
                x2="75"
                y2="140"
                stroke="#14B8A6"
                strokeWidth="1.5"
                opacity="0.3"
                animate={{
                  y1: [10, 20, 10],
                  y2: [140, 130, 140],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              {/* Dots */}
              {[20, 40, 60, 80, 100, 120].map((x, i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={x}
                  r="2"
                  fill="#14B8A6"
                  opacity="0.3"
                  animate={{
                    r: [2, 4, 2],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Royal Blue Accent Blob */}
          <motion.div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />

          {/* Cyan Floating Shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-cyan-400/20 rounded-xl"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 20, ease: "linear" },
              scale: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              opacity: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-8 h-8 border-2 border-teal-400/20 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          />

          {/* Soft Glowing Gradient */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at center, rgba(251, 146, 60, 0.08) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "easeInOut",
            }}
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
                opacity: 0.15,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 5 + 3,
                delay: Math.random() * 4,
              }}
            />
          ))}

          {/* Left Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-5 z-20 text-center md:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for Work
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block">Nitesh Kumar Sharma</span>

              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 bg-[length:200%_auto] animate-gradient">
                  Full Stack & MERN Developer
                </span>

                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full shadow-lg shadow-orange-500/30"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              React, Node.js, Express.js & MongoDB Developer{" "}
            </motion.h2>

            <motion.p
              className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I build modern, scalable web applications, eCommerce platforms,
              REST APIs, and custom websites using React, Node.js, Express.js,
              and MongoDB for businesses, startups, and clients.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <ScrollLink
                to="hireme"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(251, 146, 60, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-black rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                >
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      👋
                    </motion.span>
                    Hire Me
                  </span>
                </motion.button>
              </ScrollLink>

              <motion.a
                href={resumePdf}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Download Resume</span>
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  ⬇
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                {
                  label: "Projects",
                  value: projects,
                  icon: "🚀",
                  color: "from-orange-400 to-orange-500",
                },
                {
                  label: "Experience",
                  value: experience,
                  icon: "💼",
                  color: "from-blue-400 to-cyan-500",
                },
                {
                  label: "Feedbacks",
                  value: feedback,
                  icon: "⭐",
                  color: "from-teal-400 to-cyan-500",
                },
                {
                  label: "Team",
                  value: team,
                  icon: "👥",
                  color: "from-purple-400 to-pink-500",
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <h3
                    className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}+
                  </h3>
                  <p className="text-gray-300 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image - Modern Glassmorphism with Abstract Background */}
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center items-center z-20 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              {/* Abstract Background Elements Behind Image */}
              <motion.div
                className="absolute -inset-20 rounded-full bg-gradient-to-r from-orange-500/5 via-cyan-500/5 to-blue-500/5 blur-3xl"
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

              {/* Glass Card */}
              <motion.div
                className="relative rounded-3xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl"
                style={{
                  boxShadow:
                    "0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 30px 60px -12px rgba(251,146,60,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated Border Gradient */}
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
                    duration: 12,
                    ease: "linear",
                  }}
                />

                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Animated Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-cyan-500/20 z-10"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
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
                    width="320"
                    height="320"
                    loading="eager"
                    decoding="async"
                    className="
    relative
    w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80
    object-cover rounded-2xl
  "
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.3,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                  />

                  {/* Animated Shine Effect */}
                  <motion.div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
                    }}
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Corner Decorations */}
                  <motion.div
                    className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-orange-400/50 rounded-tl-lg z-20"
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
                    className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg z-20"
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
                    className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg z-20"
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
                    className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-orange-400/50 rounded-br-lg z-20"
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

                {/* Bottom Info Bar */}
                <motion.div
                  className="mt-4 flex items-center justify-between px-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-400"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                      }}
                    />
                    <span className="text-xs text-gray-400">Available</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-orange-400 text-xs"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          delay: i * 0.1,
                        }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-black px-4 py-2 rounded-full text-xs font-bold shadow-2xl z-30 backdrop-blur-sm"
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                🏆 Top Developer
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-2xl z-30 backdrop-blur-sm"
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
              >
                💻 4+ Years
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-5 bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-3 py-1.5 rounded-full text-[10px] font-bold shadow-2xl z-30 backdrop-blur-sm"
                animate={{
                  x: [0, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              >
                ⚡ Expert
              </motion.div>

              <motion.div
                className="absolute bottom-1/2 -right-5 bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-3 py-1.5 rounded-full text-[10px] font-bold shadow-2xl z-30 backdrop-blur-sm"
                animate={{
                  x: [0, 15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
              >
                🎯 Focused
              </motion.div>

              {/* Rotating Rings */}
              <motion.div
                className="absolute -inset-12 rounded-full border-2 border-orange-400/20"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { repeat: Infinity, duration: 20, ease: "linear" },
                  scale: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute -inset-16 rounded-full border border-cyan-400/10"
                animate={{
                  rotate: -360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { repeat: Infinity, duration: 25, ease: "linear" },
                  scale: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              />
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <motion.span
              className="text-gray-500 text-[10px] uppercase tracking-widest"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Scroll Down
            </motion.span>
            <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center relative overflow-hidden">
              <motion.div
                className="w-1 h-2 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full absolute"
                animate={{
                  y: [0, 16, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              />
            </div>
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
    </InteractiveCursor>
  );
};

export default Hero;
