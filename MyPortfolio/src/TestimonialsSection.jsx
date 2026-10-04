// TestimonialsSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";

const testimonials = [
  {
    name: "John Doe",
    role: "Client",
    feedback:
      "Nitesh developed our freelancing platform with exceptional UI and seamless functionality. Highly recommended for full-stack projects!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    company: "TechCorp Inc.",
  },
  {
    name: "Jane Smith",
    role: "Coworker",
    feedback:
      "Worked with Nitesh on a job portal project. His coding skills and design sense are top-notch. Always delivers on time.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    company: "DesignStudio",
  },
  {
    name: "Alice Johnson",
    role: "Client",
    feedback:
      "Professional and talented. The portfolio he created perfectly showcases skills and projects. Highly creative and reliable.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    company: "CreativeMinds",
  },
  {
    name: "Rahul Sharma",
    role: "Client (India)",
    feedback:
      "Nitesh designed our platform with incredible attention to detail and performance. Excellent full-stack development skills and timely delivery.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    company: "StartUpIndia",
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    feedback:
      "Outstanding problem-solving skills and clean code practices. Nitesh exceeded our expectations on every front.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    company: "GlobalTech",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const StarRating = ({ rating }) => (
    <div
      className="flex gap-1"
      aria-label={`${rating} out of 5 stars`}
      role="img"
    >
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          aria-hidden="true"
          className={`text-sm ${
            i < rating ? "text-yellow-400" : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.5,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.9,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.4,
      },
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full py-20 sm:py-28 bg-[#0B1120] text-white flex flex-col items-center px-4 sm:px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background Orbs */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-3xl"
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
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-3xl"
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
            background: "#FB923C",
            opacity: 0.08,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 4 + 3,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Section Header */}
      <motion.div
        className="text-center mb-16 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="inline-block px-4 py-2 mb-4 text-sm font-medium text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.span>

        <motion.h2
          id="testimonials-heading"
          className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="text-white">What Clients</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
            Say
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          Feedback from clients and collaborators about working with Nitesh
          Kumar Sharma on full-stack web development projects.
        </motion.p>
      </motion.div>

      {/* Testimonial Card */}
      <div
        className="relative w-full max-w-4xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.article
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            aria-live="polite"
            className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl"
          >
            {/* Quote Icon */}
            <motion.div
              aria-hidden="true"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-orange-400 text-4xl mb-6"
            >
              <FaQuoteLeft />
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <StarRating rating={currentTestimonial.rating} />
            </motion.div>

            {/* Feedback */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-6"
            >
              "{currentTestimonial.feedback}"
            </motion.p>

            {/* Client Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <img
                  src={currentTestimonial.avatar}
                  alt={`${currentTestimonial.name} - testimonial for Nitesh Kumar Sharma`}
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded-full border-2 border-orange-400 object-cover"
                />

                <motion.div
                  aria-hidden="true"
                  className="absolute -bottom-1 -right-1 bg-orange-400 rounded-full p-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <BsFillPatchCheckFill className="text-black text-xs" />
                </motion.div>
              </motion.div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  {currentTestimonial.name}
                </h3>

                <p className="text-gray-400 text-sm">
                  {currentTestimonial.role}
                </p>

                <p className="text-orange-400 text-sm">
                  {currentTestimonial.company}
                </p>
              </div>
            </motion.div>

            {/* Decorative Corners */}
            <div
              aria-hidden="true"
              className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-orange-400/30 rounded-tr-lg"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-orange-400/30 rounded-bl-lg"
            />
          </motion.article>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <motion.button
            type="button"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.05, x: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-orange-400/30 transition-all duration-300"
          >
            <FaChevronLeft
              aria-hidden="true"
              className="text-orange-400 text-sm"
            />
            <span className="text-sm text-gray-300">Prev</span>
          </motion.button>

          <motion.button
            type="button"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.05, x: 3 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-orange-400/30 transition-all duration-300"
          >
            <span className="text-sm text-gray-300">Next</span>

            <FaChevronRight
              aria-hidden="true"
              className="text-orange-400 text-sm"
            />
          </motion.button>
        </div>

        {/* Dots */}
        <div
          className="flex justify-center gap-3 mt-8"
          aria-label="Testimonial navigation"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.button
              key={idx}
              type="button"
              aria-label={`View testimonial from ${testimonial.name}`}
              aria-current={idx === currentIndex ? "true" : undefined}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(idx)}
              className="relative"
            >
              <div
                aria-hidden="true"
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-orange-400"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />

              {idx === currentIndex && (
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border-2 border-orange-400"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Counter */}
        <div
          className="text-center mt-4 text-sm text-gray-500"
          aria-label={`Showing testimonial ${currentIndex + 1} of ${
            testimonials.length
          }`}
        >
          {currentIndex + 1} / {testimonials.length}
        </div>

        {/* Auto-play Indicator */}
        <motion.div
          animate={{ opacity: isHovered ? 0.3 : 0.6 }}
          className="text-center mt-2 text-xs text-gray-500"
          aria-live="polite"
        >
          {isHovered ? "⏸ Paused" : "▶ Auto-playing"}
        </motion.div>
      </div>

      {/* Bottom Line */}
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

export default TestimonialsSection;
