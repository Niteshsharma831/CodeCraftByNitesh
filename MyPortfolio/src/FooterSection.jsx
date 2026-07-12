// // FooterSection.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaTwitter,
//   FaInstagram,
//   FaEnvelope,
// } from "react-icons/fa";
// import { SiFiverr, SiUpwork } from "react-icons/si";

// const socialLinks = [
//   {
//     name: "LinkedIn",
//     icon: <FaLinkedin />,
//     url: "https://www.linkedin.com/in/nitesh-kumar-sharma-2894a1185/",
//     color: "#0A66C2",
//   },
//   {
//     name: "GitHub",
//     icon: <FaGithub />,
//     url: "https://github.com/Niteshsharma831?tab=repositories",
//     color: "#333",
//   },
//   {
//     name: "Twitter",
//     icon: <FaTwitter />,
//     url: "https://x.com/Niteshsharma_11",
//     color: "#1DA1F2",
//   },
//   {
//     name: "Instagram",
//     icon: <FaInstagram />,
//     url: "https://www.instagram.com/niteshsharma_99/",
//     color: "#E4405F",
//   },
//   {
//     name: "Email",
//     icon: <FaEnvelope />,
//     url: "mailto:its.freelancervibes@gmail.com",
//     color: "#FACC15",
//   },
//   {
//     name: "Fiverr",
//     icon: <SiFiverr />,
//     url: "https://www.fiverr.com/users/niteshsharma_01/seller_dashboard",
//     color: "#1DBF73",
//   },
//   {
//     name: "Upwork",
//     icon: <SiUpwork />,
//     url: "https://www.upwork.com/freelancers/~017094f2ce5312b0a6",
//     color: "#6FDA44",
//   },
// ];

// const FooterSection = () => {
//   return (
//     <footer className="w-full bg-zinc-900 text-white pt-12 pb-8 px-4 sm:px-6 md:px-20 flex flex-col items-center">
//       {/* Header */}
//       <motion.h2
//         className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-yellow-400"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Follow Me / Hire Me
//       </motion.h2>

//       {/* Social Icons */}
//       <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
//         {socialLinks.map((link, idx) => (
//           <motion.a
//             key={idx}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             title={link.name}
//             className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 transition-colors shadow-md"
//             style={{ color: link.color }}
//             whileHover={{
//               scale: 1.2,
//               y: -5,
//               boxShadow: `0 4px 15px ${link.color}`,
//             }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: idx * 0.1 }}
//           >
//             <motion.div
//               animate={{ y: [0, -4, 0] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="text-xl sm:text-2xl"
//             >
//               {link.icon}
//             </motion.div>
//           </motion.a>
//         ))}
//       </div>

//       {/* Footer Links */}
//       <motion.div
//         className="text-gray-400 text-sm sm:text-base flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.2 }}
//       >
//         <span>© 2025 Nitesh Sharma. All rights reserved.</span>
//         <span className="hidden sm:inline">|</span>
//         <a
//           href="#"
//           className="hover:text-yellow-400 transition-colors hover:underline"
//         >
//           Privacy Policy
//         </a>
//         <span className="hidden sm:inline">|</span>
//         <a
//           href="#"
//           className="hover:text-yellow-400 transition-colors hover:underline"
//         >
//           Terms of Service
//         </a>
//       </motion.div>
//     </footer>
//   );
// };

// export default FooterSection;


// FooterSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/nitesh-kumar-sharma-2894a1185/",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/Niteshsharma831?tab=repositories",
    color: "#fff",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://x.com/Niteshsharma_11",
    color: "#1DA1F2",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/niteshsharma_99/",
    color: "#E4405F",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:its.freelancervibes@gmail.com",
    color: "#FB923C",
  },
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    url: "https://www.fiverr.com/users/niteshsharma_01/seller_dashboard",
    color: "#1DBF73",
  },
  {
    name: "Upwork",
    icon: <SiUpwork />,
    url: "https://www.upwork.com/freelancers/~017094f2ce5312b0a6",
    color: "#6FDA44",
  },
];

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B1120] text-white pt-16 pb-8 px-4 sm:px-6 md:px-20 flex flex-col items-center relative overflow-hidden">
      {/* Background Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-3xl"
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
        className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-orange-500/5 blur-3xl"
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

      {/* Divider Line */}
      <motion.div
        className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
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
          Let's Connect
        </motion.span>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="text-white">Follow Me /</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
            Hire Me
          </span>
        </motion.h2>
        <motion.p
          className="text-gray-400 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          Connect with me on social platforms
        </motion.p>
      </motion.div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-10 max-w-2xl">
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className="relative group"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300 shadow-lg group-hover:shadow-orange-500/20"
              style={{
                boxShadow: `0 0 20px ${link.color}10`,
              }}
            >
              <motion.div
                className="text-2xl sm:text-3xl transition-colors duration-300"
                style={{ color: link.color }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                }}
                transition={{ duration: 0.3 }}
              >
                {link.icon}
              </motion.div>
            </div>
            {/* Tooltip */}
            <motion.span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
              initial={{ y: 5 }}
              whileHover={{ y: 0 }}
            >
              {link.name}
            </motion.span>
          </motion.a>
        ))}
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2">
          <span>© {currentYear}</span>
          <span className="text-orange-400 font-medium">Nitesh Sharma</span>
          <span>All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href="#"
            className="hover:text-orange-400 transition-colors duration-300"
            whileHover={{ x: 3 }}
          >
            Privacy Policy
          </motion.a>
          <span className="text-white/10">|</span>
          <motion.a
            href="#"
            className="hover:text-orange-400 transition-colors duration-300"
            whileHover={{ x: 3 }}
          >
            Terms of Service
          </motion.a>
        </div>

        <motion.div
          className="flex items-center gap-1 text-gray-500 text-xs"
          whileHover={{ scale: 1.05 }}
        >
          <span>Made with</span>
          <motion.span
            className="text-orange-400"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            <FaHeart size={12} />
          </motion.span>
          <span>in India 🇮🇳</span>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-black shadow-lg shadow-orange-500/30 flex items-center justify-center hover:scale-110 transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

      {/* Decorative Bottom Line */}
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
    </footer>
  );
};

export default FooterSection;