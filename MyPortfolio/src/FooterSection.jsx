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
    icon: <FaLinkedin aria-hidden="true" />,
    url: "https://www.linkedin.com/in/nitesh-kumar-sharma-2894a1185/",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    icon: <FaGithub aria-hidden="true" />,
    url: "https://github.com/Niteshsharma831?tab=repositories",
    color: "#fff",
  },
  {
    name: "Twitter",
    icon: <FaTwitter aria-hidden="true" />,
    url: "https://x.com/Niteshsharma_11",
    color: "#1DA1F2",
  },
  {
    name: "Instagram",
    icon: <FaInstagram aria-hidden="true" />,
    url: "https://www.instagram.com/niteshsharma_99/",
    color: "#E4405F",
  },
  {
    name: "Email",
    icon: <FaEnvelope aria-hidden="true" />,
    url: "mailto:its.freelancervibes@gmail.com",
    color: "#FB923C",
  },
  {
    name: "Fiverr",
    icon: <SiFiverr aria-hidden="true" />,
    url: "https://www.fiverr.com/users/niteshsharma_01/seller_dashboard",
    color: "#1DBF73",
  },
  {
    name: "Upwork",
    icon: <SiUpwork aria-hidden="true" />,
    url: "https://www.upwork.com/freelancers/~017094f2ce5312b0a6",
    color: "#6FDA44",
  },
];

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-[#0B1120] text-white pt-16 pb-8 px-4 sm:px-6 md:px-20 flex flex-col items-center relative overflow-hidden"
      aria-label="Nitesh Kumar Sharma footer"
    >
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
        aria-hidden="true"
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
        aria-hidden="true"
      />

      {/* Divider Line */}
      <motion.div
        className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        aria-hidden="true"
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
          className="text-gray-400 mt-2 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          Connect with Nitesh Kumar Sharma, a Full Stack and MERN Developer
          specializing in React.js, Node.js, Express.js, MongoDB, REST APIs, and
          modern web applications.
        </motion.p>
      </motion.div>

      {/* Social Icons */}
      <nav
        className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-10 max-w-2xl"
        aria-label="Nitesh Kumar Sharma social and professional profiles"
      >
        {socialLinks.map((link, idx) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            aria-label={`Nitesh Kumar Sharma on ${link.name}`}
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
              aria-hidden="true"
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
              aria-hidden="true"
            >
              {link.name}
            </motion.span>
          </motion.a>
        ))}
      </nav>

      {/* Footer Bottom */}
      <motion.div
        className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Copyright */}
        <div className="flex items-center gap-2 text-center">
          <span>© {currentYear}</span>

          <span className="text-orange-400 font-medium">
            Nitesh Kumar Sharma
          </span>

          <span>All rights reserved.</span>
        </div>

        {/* Legal Links */}
        <div className="flex items-center gap-4">
          <span
            className="cursor-default hover:text-orange-400 transition-colors duration-300"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </span>

          <span className="text-white/10" aria-hidden="true">
            |
          </span>

          <span
            className="cursor-default hover:text-orange-400 transition-colors duration-300"
            aria-label="Terms of Service"
          >
            Terms of Service
          </span>
        </div>

        {/* Made With */}
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
            aria-hidden="true"
          >
            <FaHeart size={12} />
          </motion.span>

          <span>in India 🇮🇳</span>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-black shadow-lg shadow-orange-500/30 flex items-center justify-center hover:scale-110 transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
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
        aria-hidden="true"
      />
    </footer>
  );
};

export default FooterSection;
