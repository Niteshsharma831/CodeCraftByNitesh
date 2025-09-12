// FooterSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { SiFiverr, SiUpwork, SiFreelancer } from "react-icons/si";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/yourprofile",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/yourusername",
    color: "#333",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/yourusername",
    color: "#1DA1F2",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/yourusername",
    color: "#E4405F",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:youremail@example.com",
    color: "#FACC15",
  },
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    url: "https://www.fiverr.com/yourprofile",
    color: "#1DBF73",
  },
  {
    name: "Upwork",
    icon: <SiUpwork />,
    url: "https://www.upwork.com/freelancers/~yourprofile",
    color: "#6FDA44",
  },
  {
    name: "Freelancer",
    icon: <SiFreelancer />,
    url: "https://www.freelancer.com/u/yourprofile",
    color: "#29A9DE",
  },
];

const FooterSection = () => {
  return (
    <footer className="w-full text-white pt-12 sm:pt-16 pb-8 flex flex-col items-center bg-gradient-to-t from-zinc-900/90 via-zinc-800/80 to-zinc-900/90 backdrop-blur-sm px-4 sm:px-6 md:px-20">
      {/* Floating Header */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-yellow-400 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: [20, 0, 20] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Follow Me / Hire Me
      </motion.h2>

      {/* Social Icons */}
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mb-6 sm:mb-8">
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-zinc-800/70 backdrop-blur-lg shadow-lg cursor-pointer"
            style={{ color: link.color }}
            whileHover={{
              scale: 1.25,
              rotate: 15,
              boxShadow: `0 0 25px ${link.color}`,
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-xl sm:text-2xl"
            >
              {link.icon}
            </motion.div>
          </motion.a>
        ))}
      </div>

      {/* Footer Links */}
      <motion.div
        className="text-gray-400 text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <span>© 2025 Nitesh Sharma. All rights reserved.</span>
        <span className="hidden sm:inline">|</span>
        <a
          href="#"
          className="hover:text-yellow-400 transition-colors hover:underline"
        >
          Privacy Policy
        </a>
        <span className="hidden sm:inline">|</span>
        <a
          href="#"
          className="hover:text-yellow-400 transition-colors hover:underline"
        >
          Terms of Service
        </a>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
