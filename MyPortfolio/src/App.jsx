import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiFolder,
  FiCode,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { Toaster } from "react-hot-toast";

import AllProjectsPage from "./AllProjectsPage";
import Hero from "./portfolio";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      to: "top",
      icon: <FiHome size={18} />,
      ariaLabel: "Go to home section",
    },
    {
      name: "Projects",
      to: "projects",
      icon: <FiFolder size={18} />,
      ariaLabel: "View web development projects",
    },
    {
      name: "Skills",
      to: "skills",
      icon: <FiCode size={18} />,
      ariaLabel: "View technical skills",
    },
    {
      name: "Experience",
      to: "experience",
      icon: <FiBriefcase size={18} />,
      ariaLabel: "View professional experience",
    },
    {
      name: "Contact",
      to: "hireme",
      icon: <FiMail size={18} />,
      ariaLabel: "Contact Nitesh Kumar Sharma",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      {/* Toast Container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            zIndex: 9999,
            background: "#1a1a2e",
            color: "#fff",
            border: "1px solid rgba(251,146,60,0.2)",
            borderRadius: "12px",
            padding: "16px",
          },
        }}
      />

      {/* Navbar */}
      <motion.nav
        aria-label="Main navigation"
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1120]/95 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
          {/* Logo / Brand */}
          <motion.button
            type="button"
            aria-label="Nitesh Kumar Sharma - Full Stack Developer - Go to homepage"
            className="text-xl sm:text-2xl font-bold cursor-pointer flex items-center gap-2 text-white bg-transparent border-0 p-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-orange-400" aria-hidden="true">
              💻
            </span>

            <span className="hidden sm:inline">Nitesh Kumar Sharma</span>

            <span className="sm:hidden">NK</span>

            <motion.span
              className="text-orange-400 text-xs font-normal"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              Developer
            </motion.span>
          </motion.button>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-1 border border-white/10"
            role="navigation"
            aria-label="Portfolio sections"
          >
            {navLinks.map((link, idx) =>
              link.to === "top" ? (
                <motion.button
                  key={idx}
                  type="button"
                  onClick={scrollToTop}
                  aria-label={link.ariaLabel}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(251,146,60,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-orange-400 transition-all duration-300 flex items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                </motion.button>
              ) : link.to === "projects" ? (
                <Link
                  key={idx}
                  to="/projects"
                  aria-label={link.ariaLabel}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 cursor-pointer flex items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ) : (
                <ScrollLink
                  key={idx}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-orange-400 bg-orange-500/10"
                  aria-label={link.ariaLabel}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 cursor-pointer flex items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                </ScrollLink>
              ),
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="focus:outline-none text-white p-2 rounded-lg bg-white/5 border border-white/10"
            >
              {menuOpen ? (
                <FiX size={24} aria-hidden="true" />
              ) : (
                <FiMenu size={24} aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              className="md:hidden bg-[#0B1120]/98 backdrop-blur-xl border-t border-white/10"
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <motion.div
                className="flex flex-col gap-2 p-6"
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                {navLinks.map((link, idx) =>
                  link.to === "top" ? (
                    <motion.button
                      key={idx}
                      type="button"
                      onClick={() => {
                        scrollToTop();
                        setMenuOpen(false);
                      }}
                      aria-label={link.ariaLabel}
                      whileHover={{
                        scale: 1.02,
                        x: 5,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300"
                    >
                      <span className="text-orange-400" aria-hidden="true">
                        {link.icon}
                      </span>

                      {link.name}
                    </motion.button>
                  ) : link.to === "projects" ? (
                    <Link
                      key={idx}
                      to="/projects"
                      onClick={() => setMenuOpen(false)}
                      aria-label={link.ariaLabel}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-orange-400" aria-hidden="true">
                        {link.icon}
                      </span>

                      {link.name}
                    </Link>
                  ) : (
                    <ScrollLink
                      key={idx}
                      to={link.to}
                      smooth
                      duration={500}
                      offset={-70}
                      onClick={() => setMenuOpen(false)}
                      aria-label={link.ariaLabel}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-orange-400" aria-hidden="true">
                        {link.icon}
                      </span>

                      {link.name}
                    </ScrollLink>
                  ),
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/projects" element={<AllProjectsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
