// StatsSection.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaUserTie, FaUsers, FaTools } from "react-icons/fa";

// Counter component
const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}</span>;
};

const StatsSection = () => {
  const stats = [
    { title: "Projects", value: 20, icon: <FaProjectDiagram size={32} /> },
    { title: "Experience", value: 1, icon: <FaUserTie size={32} /> },
    { title: "Clients", value: 8, icon: <FaUsers size={32} /> },
    { title: "Skills", value: 14, icon: <FaTools size={32} /> },
  ];

  return (
    <section
      id="stats"
      className="w-full py-20 bg-gradient-to-b from-zinc-900 to-zinc-800 text-white flex justify-center relative overflow-hidden"
    >
      {/* Optional background shape */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 opacity-20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 opacity-20 rounded-full blur-3xl -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center max-w-6xl w-full px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-zinc-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-yellow-400 mb-4">{stat.icon}</div>
            <h2 className="text-4xl font-bold mb-2">
              <Counter end={stat.value} />
              {stat.title === "Experience" ? "+" : ""}
            </h2>
            <p className="text-lg font-medium text-gray-300">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
