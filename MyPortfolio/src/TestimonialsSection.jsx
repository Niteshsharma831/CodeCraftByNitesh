// // TestimonialsSection.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaQuoteLeft,
//   FaQuoteRight,
//   FaStar,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { BsFillPatchCheckFill } from "react-icons/bs";

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "Client",
//     feedback:
//       "Nitesh developed our freelancing platform with exceptional UI and seamless functionality. Highly recommended for full-stack projects!",
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//     rating: 5,
//     company: "TechCorp Inc.",
//   },
//   {
//     name: "Jane Smith",
//     role: "Coworker",
//     feedback:
//       "Worked with Nitesh on a job portal project. His coding skills and design sense are top-notch. Always delivers on time.",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//     rating: 5,
//     company: "DesignStudio",
//   },
//   {
//     name: "Alice Johnson",
//     role: "Client",
//     feedback:
//       "Professional and talented. The portfolio he created perfectly showcases skills and projects. Highly creative and reliable.",
//     avatar: "https://randomuser.me/api/portraits/women/68.jpg",
//     rating: 5,
//     company: "CreativeMinds",
//   },
//   {
//     name: "Rahul Sharma",
//     role: "Client (India)",
//     feedback:
//       "Nitesh designed our platform with incredible attention to detail and performance. Excellent full-stack development skills and timely delivery.",
//     avatar: "https://randomuser.me/api/portraits/men/75.jpg",
//     rating: 5,
//     company: "StartUpIndia",
//   },
//   {
//     name: "Michael Chen",
//     role: "Project Manager",
//     feedback:
//       "Outstanding problem-solving skills and clean code practices. Nitesh exceeded our expectations on every front.",
//     avatar: "https://randomuser.me/api/portraits/men/22.jpg",
//     rating: 5,
//     company: "GlobalTech",
//   },
// ];

// const TestimonialsSection = () => {
//   const [[page, direction], setPage] = useState([0, 0]);
//   const [isHovered, setIsHovered] = useState(false);
//   const containerRef = useRef(null);

//   // Auto slide every 4 seconds
//   useEffect(() => {
//     if (isHovered) return;

//     const interval = setInterval(() => {
//       setPage(([currentPage]) => [(currentPage + 1) % testimonials.length, 1]);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [isHovered]);

//   const paginate = (newDirection) => {
//     setPage([
//       (page + newDirection + testimonials.length) % testimonials.length,
//       newDirection,
//     ]);
//   };

//   const goToSlide = (index) => {
//     const newDirection = index > page ? 1 : -1;
//     setPage([index, newDirection]);
//   };

//   // Star rating component
//   const StarRating = ({ rating }) => (
//     <div className="flex gap-1 mb-2">
//       {[...Array(5)].map((_, i) => (
//         <motion.div
//           key={i}
//           initial={{ scale: 0, rotate: -180 }}
//           animate={{ scale: 1, rotate: 0 }}
//           transition={{ delay: i * 0.1, type: "spring" }}
//         >
//           <FaStar
//             className={`text-sm ${
//               i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
//             }`}
//           />
//         </motion.div>
//       ))}
//     </div>
//   );

//   return (
//     <section
//       id="testimonials"
//       className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white overflow-hidden"
//     >
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/3 rounded-full blur-3xl"></div>
//         <div className="absolute top-10 right-20 w-40 h-40 bg-yellow-400/2 rounded-full blur-2xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
//             <BsFillPatchCheckFill className="text-yellow-400" />
//             <span className="text-sm text-gray-300">Client Feedback</span>
//           </div>
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">What Clients </span>
//             <span className="text-yellow-400 relative">
//               Say
//               <motion.span
//                 className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 viewport={{ once: true }}
//               />
//             </span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Real feedback from clients and collaborators about their experience
//             working with me
//           </p>
//         </motion.div>

//         {/* Main Testimonial Card */}
//         <div
//           ref={containerRef}
//           className="relative max-w-4xl mx-auto"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Floating Quote Background */}
//           <motion.div
//             animate={{
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration: 120,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute -top-20 -left-20 text-yellow-400/10 text-[300px] pointer-events-none"
//           >
//             "
//           </motion.div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={page}
//               custom={direction}
//               initial={{
//                 opacity: 0,
//                 scale: 0.9,
//                 x: direction > 0 ? 100 : -100,
//               }}
//               animate={{ opacity: 1, scale: 1, x: 0 }}
//               exit={{ opacity: 0, scale: 0.9, x: direction > 0 ? -100 : 100 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 200,
//                 damping: 25,
//               }}
//               className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-black/50 overflow-hidden"
//             >
//               {/* Card Glow Effect */}
//               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>

//               {/* Corner Accents */}
//               <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-400/50 rounded-tr-lg"></div>
//               <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-400/50 rounded-bl-lg"></div>

//               <div className="relative z-10">
//                 {/* Quote Icon */}
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 0.2, type: "spring" }}
//                   className="text-yellow-400 text-5xl mb-6"
//                 >
//                   <FaQuoteLeft />
//                 </motion.div>

//                 {/* Testimonial Content */}
//                 <div className="mb-8">
//                   <StarRating rating={testimonials[page].rating} />
//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 }}
//                     className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed italic mb-6"
//                   >
//                     "{testimonials[page].feedback}"
//                   </motion.p>
//                 </div>

//                 {/* Client Info */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                   className="flex items-center gap-4"
//                 >
//                   <div className="relative">
//                     <motion.div
//                       whileHover={{ scale: 1.1 }}
//                       className="relative"
//                     >
//                       <img
//                         src={testimonials[page].avatar}
//                         alt={testimonials[page].name}
//                         className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-yellow-400/30 object-cover"
//                       />
//                       <motion.div
//                         animate={{
//                           scale: [1, 1.2, 1],
//                           opacity: [0.7, 0.3, 0.7],
//                         }}
//                         transition={{
//                           duration: 2,
//                           repeat: Infinity,
//                         }}
//                         className="absolute inset-0 rounded-full border-2 border-yellow-400"
//                       />
//                     </motion.div>
//                     <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-1">
//                       <BsFillPatchCheckFill className="text-black text-xs" />
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold text-white">
//                       {testimonials[page].name}
//                     </h4>
//                     <p className="text-gray-400">{testimonials[page].role}</p>
//                     <p className="text-sm text-yellow-400/80">
//                       {testimonials[page].company}
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation Buttons */}
//           <div className="flex justify-between items-center mt-8">
//             <motion.button
//               whileHover={{ scale: 1.1, x: -5 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => paginate(-1)}
//               className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-full text-white hover:bg-zinc-800 transition-all group"
//             >
//               <FaChevronLeft className="text-yellow-400 group-hover:-translate-x-1 transition-transform" />
//               <span className="text-sm">Previous</span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1, x: 5 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => paginate(1)}
//               className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-full text-white hover:bg-zinc-800 transition-all group"
//             >
//               <span className="text-sm">Next</span>
//               <FaChevronRight className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
//             </motion.button>
//           </div>
//         </div>

//         {/* Progress Indicators */}
//         <div className="flex justify-center items-center gap-4 mt-12">
//           {/* Dots Navigation */}
//           <div className="flex gap-3">
//             {testimonials.map((_, idx) => (
//               <motion.button
//                 key={idx}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => goToSlide(idx)}
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//                 className="relative focus:outline-none"
//               >
//                 <div
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     idx === page ? "bg-yellow-400" : "bg-zinc-700"
//                   }`}
//                 />
//                 {idx === page && (
//                   <motion.div
//                     className="absolute inset-0 rounded-full border-2 border-yellow-400"
//                     animate={{
//                       scale: [1, 1.5, 1],
//                       opacity: [1, 0.3, 1],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                     }}
//                   />
//                 )}
//               </motion.button>
//             ))}
//           </div>

//           {/* Counter */}
//           <div className="flex items-center gap-2 text-gray-400">
//             <span className="text-yellow-400 font-bold">{page + 1}</span>
//             <span>/</span>
//             <span>{testimonials.length}</span>
//           </div>
//         </div>

//         {/* Auto-play Indicator */}
//         <motion.div
//           animate={{ opacity: isHovered ? 0.3 : 1 }}
//           className="text-center mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
//         >
//           <div
//             className={`w-2 h-2 rounded-full ${
//               isHovered ? "bg-gray-600" : "bg-yellow-400"
//             } animate-pulse`}
//           />
//           <span>{isHovered ? "Paused" : "Auto-playing"}</span>
//         </motion.div>

//         {/* Floating Testimonial Previews */}
//         <div className="hidden lg:grid grid-cols-3 gap-4 mt-16 opacity-50">
//           {testimonials.slice(0, 3).map((testimonial, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.05, opacity: 1 }}
//               className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/30 rounded-xl p-4 text-center"
//             >
//               <div className="flex justify-center gap-1 mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} className="text-yellow-400 text-xs" />
//                 ))}
//               </div>
//               <p className="text-gray-400 text-sm line-clamp-2">
//                 {testimonial.feedback}
//               </p>
//               <div className="flex items-center justify-center gap-2 mt-3">
//                 <img
//                   src={testimonial.avatar}
//                   alt={testimonial.name}
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <span className="text-xs text-gray-300">
//                   {testimonial.name}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
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
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-sm ${i < rating ? "text-yellow-400" : "text-gray-600"}`}
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

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full py-20 sm:py-28 bg-[#0B1120] text-white flex flex-col items-center px-4 sm:px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background Orbs - Single Theme */}
      <motion.div
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
          Testimonials
        </motion.span>
        <motion.h2
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
          Real feedback from clients and collaborators
        </motion.p>
      </motion.div>

      {/* Testimonial Card */}
      <div
        className="relative w-full max-w-4xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl"
          >
            {/* Quote Icon */}
            <motion.div
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
              <StarRating rating={testimonials[currentIndex].rating} />
            </motion.div>

            {/* Feedback */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-6"
            >
              "{testimonials[currentIndex].feedback}"
            </motion.p>

            {/* Client Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-orange-400 object-cover"
                />
                <motion.div
                  className="absolute -bottom-1 -right-1 bg-orange-400 rounded-full p-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <BsFillPatchCheckFill className="text-black text-xs" />
                </motion.div>
              </motion.div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-orange-400 text-sm">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>

            {/* Decorative Corners */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-orange-400/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-orange-400/30 rounded-bl-lg" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <motion.button
            whileHover={{ scale: 1.05, x: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-orange-400/30 transition-all duration-300"
          >
            <FaChevronLeft className="text-orange-400 text-sm" />
            <span className="text-sm text-gray-300">Prev</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, x: 3 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-orange-400/30 transition-all duration-300"
          >
            <span className="text-sm text-gray-300">Next</span>
            <FaChevronRight className="text-orange-400 text-sm" />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(idx)}
              className="relative"
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-orange-400"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
              {idx === currentIndex && (
                <motion.div
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
        <div className="text-center mt-4 text-sm text-gray-500">
          {currentIndex + 1} / {testimonials.length}
        </div>

        {/* Auto-play Indicator */}
        <motion.div
          animate={{ opacity: isHovered ? 0.3 : 0.6 }}
          className="text-center mt-2 text-xs text-gray-500"
        >
          {isHovered ? "⏸ Paused" : "▶ Auto-playing"}
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
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