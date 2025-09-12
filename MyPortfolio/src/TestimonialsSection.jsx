// TestimonialsSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    role: "Client",
    feedback:
      "Nitesh developed our freelancing platform with exceptional UI and seamless functionality. Highly recommended for full-stack projects!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Coworker",
    feedback:
      "Worked with Nitesh on a job portal project. His coding skills and design sense are top-notch. Always delivers on time.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Client",
    feedback:
      "Professional and talented. The portfolio he created perfectly showcases skills and projects. Highly creative and reliable.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Rahul Sharma",
    role: "Client (India)",
    feedback:
      "Nitesh designed our platform with incredible attention to detail and performance. Excellent full-stack development skills and timely delivery.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -400 : 400,
    opacity: 0,
    scale: 0.9,
  }),
};

const TestimonialsSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([
      (page + newDirection + testimonials.length) % testimonials.length,
      newDirection,
    ]);
  };

  return (
    <section
      id="testimonials"
      className="w-full py-16 sm:py-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white flex flex-col items-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 text-yellow-400 text-center">
        Testimonials
      </h2>

      <div className="relative w-full max-w-sm sm:max-w-2xl md:max-w-3xl px-4 flex items-center justify-center">
        <AnimatePresence custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl text-center flex flex-col items-center hover:scale-[1.02] hover:shadow-yellow-400/60 transition-transform duration-500 w-full"
          >
            <motion.div
              className="text-4xl sm:text-5xl text-yellow-400 mb-3 sm:mb-4 flex justify-center gap-2 animate-pulse"
              whileHover={{ rotate: 10, scale: 1.2 }}
            >
              <FaQuoteLeft />
              <FaQuoteRight />
            </motion.div>
            <p className="text-gray-300 italic mb-4 sm:mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
              {testimonials[page].feedback}
            </p>
            <img
              src={testimonials[page].avatar}
              alt={testimonials[page].name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-3 object-cover border-2 border-yellow-400 shadow-md"
            />
            <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">
              {testimonials[page].name}
            </h4>
            <span className="text-gray-400 text-xs sm:text-sm">
              {testimonials[page].role}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.2 }}
          className="absolute left-2 sm:left-0 md:left-[-50px] top-1/2 transform -translate-y-1/2 text-yellow-400 hover:text-yellow-300 transition text-2xl sm:text-3xl md:text-4xl bg-zinc-800/70 sm:bg-transparent rounded-full sm:rounded-none p-2 sm:p-0"
        >
          &#8592;
        </motion.button>
        <motion.button
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.2 }}
          className="absolute right-2 sm:right-0 md:right-[-50px] top-1/2 transform -translate-y-1/2 text-yellow-400 hover:text-yellow-300 transition text-2xl sm:text-3xl md:text-4xl bg-zinc-800/70 sm:bg-transparent rounded-full sm:rounded-none p-2 sm:p-0"
        >
          &#8594;
        </motion.button>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 mt-6 sm:mt-8">
        {testimonials.map((_, idx) => (
          <motion.div
            key={idx}
            animate={{
              scale: idx === page ? 1.4 : 1,
              opacity: idx === page ? 1 : 0.5,
            }}
            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-400 cursor-pointer"
            onClick={() => setPage([idx, idx > page ? 1 : -1])}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
