import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

import AllProjectsPage from "./AllProjectsPage";
import Hero from "./portfolio";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "top" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Contact Me", to: "hireme" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Router>
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-zinc-900/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <motion.div
            className="text-xl font-bold cursor-pointer hover:text-yellow-400 flex items-center gap-2 text-white"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={scrollToTop}
          >
            <span className="text-yellow-400">💻</span> Nitesh Kumar Sharma
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link, idx) =>
              link.to === "top" ? (
                <motion.button
                  key={idx}
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, color: "#FACC15" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer transition-colors duration-300 text-white"
                >
                  {link.name}
                </motion.button>
              ) : (
                <ScrollLink
                  key={idx}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-70}
                  className="cursor-pointer text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  {link.name}
                </ScrollLink>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              className="focus:outline-none text-white"
            >
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden bg-zinc-900 w-full overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex flex-col gap-4 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {navLinks.map((link, idx) =>
                  link.to === "top" ? (
                    <motion.button
                      key={idx}
                      onClick={() => {
                        scrollToTop();
                        setMenuOpen(false);
                      }}
                      whileHover={{ scale: 1.05, color: "#FACC15" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer text-white"
                    >
                      {link.name}
                    </motion.button>
                  ) : (
                    <ScrollLink
                      key={idx}
                      to={link.to}
                      smooth
                      duration={500}
                      offset={-70}
                      onClick={() => setMenuOpen(false)}
                      className="cursor-pointer text-white hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </ScrollLink>
                  )
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Routes */}
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<AllProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
