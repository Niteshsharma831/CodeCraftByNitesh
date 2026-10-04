import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaEnvelope, FaPaperPlane, FaSpinner } from "react-icons/fa";

const HireMeSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [backendUrl, setBackendUrl] = useState("");

  useEffect(() => {
    const hostname = window.location.hostname;

    if (hostname === "localhost" || hostname === "127.0.0.1") {
      setBackendUrl("http://localhost:5000");
    } else {
      setBackendUrl("https://codecraftbynitesh.onrender.com");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!backendUrl) {
      toast.error("Please try again in a moment");
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Message should be at least 10 characters");
      return;
    }

    // Correct email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    const toastId = toast.loading("Sending your message...");

    try {
      const response = await axios.post(
        `${backendUrl}/api/hirerequests`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          timeout: 30000,
        },
      );

      toast.dismiss(toastId);

      toast.success(response.data.message || "Message sent successfully! 🎉");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.dismiss(toastId);

      if (error.response) {
        toast.error(error.response.data?.error || "Failed to send message");
      } else if (error.code === "ERR_NETWORK") {
        toast.error("Network error. Please check your connection");
      } else {
        toast.error("Something went wrong. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="hireme"
      aria-labelledby="hireme-heading"
      className="w-full py-20 sm:py-28 bg-[#0B1120] text-white flex flex-col items-center px-4 sm:px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background Orbs */}
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
      {[...Array(10)].map((_, i) => (
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

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1a1a2e",
            color: "#fff",
            border: "1px solid rgba(251,146,60,0.2)",
            borderRadius: "12px",
            padding: "16px",
          },
        }}
      />

      <div className="flex flex-col items-center w-full max-w-3xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
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
            Contact Me
          </motion.span>

          <motion.h2
            id="hireme-heading"
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Hire Nitesh Kumar Sharma</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              — Full Stack & MERN Developer
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Looking for a Full Stack or MERN Developer? I build modern web
            applications, eCommerce platforms, REST APIs, and custom websites
            using React.js, Node.js, Express.js, and MongoDB for businesses,
            startups, and clients.
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          aria-label="Contact Nitesh Kumar Sharma"
          className="w-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-5">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                aria-hidden="true"
              >
                <FaUser size={16} />
              </div>

              <label htmlFor="hire-name" className="sr-only">
                Your Name
              </label>

              <input
                id="hire-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Your Name"
                aria-label="Your Name"
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 outline-none"
                disabled={loading}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                aria-hidden="true"
              >
                <FaEnvelope size={16} />
              </div>

              <label htmlFor="hire-email" className="sr-only">
                Your Email
              </label>

              <input
                id="hire-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="Your Email"
                aria-label="Your Email"
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 outline-none"
                disabled={loading}
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <label htmlFor="hire-message" className="sr-only">
                Your Message
              </label>

              <textarea
                id="hire-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                placeholder="Your Message (min 10 characters)"
                aria-label="Your Message"
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 outline-none resize-none"
                disabled={loading}
              />

              <div className="absolute bottom-3 right-4 text-xs text-gray-500">
                {formData.message.length}/10 min
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading || !backendUrl}
              aria-label={
                loading
                  ? "Sending your message"
                  : "Send message to Nitesh Kumar Sharma"
              }
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                loading || !backendUrl
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-400 to-orange-500 text-black hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02]"
              }`}
              whileHover={loading || !backendUrl ? {} : { scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <>
                  <FaSpinner
                    className="animate-spin"
                    size={20}
                    aria-hidden="true"
                  />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane size={18} aria-hidden="true" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>

            <motion.p
              className="text-center text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              I'll respond within 24 hours ✨
            </motion.p>
          </div>
        </motion.form>
      </div>

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
    </section>
  );
};

export default HireMeSection;
