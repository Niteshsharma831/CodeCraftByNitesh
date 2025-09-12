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
    color: "#333",
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
    color: "#FACC15",
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
  return (
    <footer className="w-full bg-zinc-900 text-white pt-12 pb-8 px-4 sm:px-6 md:px-20 flex flex-col items-center">
      {/* Header */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-yellow-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Follow Me / Hire Me
      </motion.h2>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 transition-colors shadow-md"
            style={{ color: link.color }}
            whileHover={{
              scale: 1.2,
              y: -5,
              boxShadow: `0 4px 15px ${link.color}`,
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
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
        className="text-gray-400 text-sm sm:text-base flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
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
