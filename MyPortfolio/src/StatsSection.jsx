// StatsSection.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaProjectDiagram, FaUserTie, FaUsers, FaTools } from "react-icons/fa";

// Counter component with enhanced animation
const Counter = ({ end, duration = 2, isInView }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let start = 0;
      const increment = end / (duration * 60);

      const counter = setInterval(() => {
        start += increment;

        if (start >= end) {
          setCount(end);
          clearInterval(counter);
          setHasAnimated(true);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }
  }, [isInView, end, duration, hasAnimated]);

  return <span>{count}</span>;
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const stats = [
    {
      title: "Projects Built",
      value: 20,
      icon: <FaProjectDiagram size={32} />,
      color: "from-orange-400 to-orange-500",
      bgColor: "from-orange-500/20",
      delay: 0,
    },
    {
      title: "Years Experience",
      value: 1,
      icon: <FaUserTie size={32} />,
      color: "from-cyan-400 to-blue-500",
      bgColor: "from-cyan-500/20",
      delay: 0.1,
    },
    {
      title: "Clients",
      value: 8,
      icon: <FaUsers size={32} />,
      color: "from-teal-400 to-cyan-500",
      bgColor: "from-teal-500/20",
      delay: 0.2,
    },
    {
      title: "Technical Skills",
      value: 14,
      icon: <FaTools size={32} />,
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/20",
      delay: 0.3,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="stats"
      aria-labelledby="stats-heading"
      className="w-full py-20 bg-[#0B1120] text-white flex justify-center relative overflow-hidden"
    >
      {/* Visually hidden SEO/accessibility heading */}
      <h2 id="stats-heading" className="sr-only">
        Full Stack Developer Statistics and Experience
      </h2>

      {/* Animated Background Elements */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-500/5 via-cyan-500/5 to-blue-500/5 blur-3xl"
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
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl"
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
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center max-w-6xl w-full px-4 relative z-10">
        {stats.map((stat, index) => (
          <motion.article
            key={index}
            className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center justify-center border border-white/10 hover:border-orange-400/30 transition-all duration-500 group overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30,
              scale: isInView ? 1 : 0.9,
              transition: {
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -12px rgba(0,0,0,0.4)",
            }}
          >
            {/* Animated Gradient Background */}
            <motion.div
              aria-hidden="true"
              className={`absolute inset-0 bg-gradient-to-r ${stat.bgColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                delay: stat.delay,
              }}
            />

            {/* Glowing Border Animation */}
            <motion.div
              aria-hidden="true"
              className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `conic-gradient(from 0deg, ${
                  stat.color.split(" ")[1]
                }, #3B82F6, #14B8A6, ${stat.color.split(" ")[1]})`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              {/* Icon with Animation */}
              <motion.div
                aria-hidden="true"
                className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-4`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: stat.delay,
                }}
              >
                {stat.icon}
              </motion.div>

              {/* Counter */}
              <motion.h3
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: stat.delay,
                }}
              >
                <Counter end={stat.value} isInView={isInView} />+
              </motion.h3>

              {/* Title */}
              <p className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {stat.title}
              </p>

              {/* Decorative Line */}
              <motion.div
                aria-hidden="true"
                className={`h-0.5 w-12 mx-auto mt-3 bg-gradient-to-r ${stat.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{
                  width: isInView ? 48 : 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                  },
                }}
              />
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              aria-hidden="true"
              className={`absolute -inset-8 rounded-full bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
            />
          </motion.article>
        ))}
      </div>

      {/* Decorative Bottom Line */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        animate={{
          width: ["0%", "33%", "0%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default StatsSection;
