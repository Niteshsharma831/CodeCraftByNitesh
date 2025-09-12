import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const InteractiveEffects = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* 🔥 Glow + Blobs only on medium+ screens */}
      <div className="hidden md:block">
        {/* Glow following cursor */}
        <motion.div
          className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full 
                     bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
                     opacity-25 blur-3xl pointer-events-none z-0"
          animate={{
            x: mousePos.x - 250,
            y: mousePos.y - 250,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 25 }}
        />

        {/* Floating blobs */}
        <motion.div
          className="fixed w-96 h-96 rounded-full bg-purple-500/30 blur-3xl pointer-events-none z-0"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "20%", left: "10%" }}
        />
        <motion.div
          className="fixed w-72 h-72 rounded-full bg-pink-400/20 blur-3xl pointer-events-none z-0"
          animate={{
            x: [0, -80, 80, 0],
            y: [0, 60, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "10%", right: "15%" }}
        />
      </div>

      {/* 🌟 Page content always above */}
      <div className="relative z-10">{children}</div>

      {/* ✨ Cursor animation (always visible, all screens) */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-yellow-400 rounded-full 
                   pointer-events-none opacity-90 z-[9999]"
        animate={{ x: mousePos.x - 8, y: mousePos.y - 8 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-purple-500 rounded-full 
                   pointer-events-none opacity-40 z-[9998]"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: "spring", stiffness: 60, damping: 25 }}
      />
    </div>
  );
};

export default InteractiveEffects;
