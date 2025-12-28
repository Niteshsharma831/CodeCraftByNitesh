import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const HireMeSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [backendUrl, setBackendUrl] = useState("");

  // Auto-detect backend URL based on environment
  useEffect(() => {
    const hostname = window.location.hostname;

    // Development (localhost)
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      setBackendUrl("http://localhost:5000");
    }
    // Production (live site)
    else {
      setBackendUrl("https://codecraftbynitesh.onrender.com");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!backendUrl) {
      toast.error("Please try again in a moment");
      return;
    }

    // Validation
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
        }
      );

      toast.dismiss(toastId);
      toast.success(response.data.message || "Message sent successfully! 🎉");

      // Clear form
      setFormData({ name: "", email: "", message: "" });
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

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 15px #FACC15" },
    hover: { scale: 1.01 },
  };

  return (
    <section
      id="hireme"
      className="w-full py-16 sm:py-24 text-white flex flex-col items-center relative px-4 sm:px-6 md:px-20"
    >
      {/* Toaster with high z-index */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f2937",
            color: "#fff",
            border: "1px solid #374151",
            borderRadius: "8px",
            padding: "16px",
          },
        }}
      />

      <div className="flex flex-col items-center w-full max-w-3xl">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-yellow-400 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hire Me
        </motion.h2>

        <motion.p
          className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Looking for a dedicated developer to bring your ideas to life? Let's
          collaborate and build something amazing!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="w-full bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col gap-4 sm:gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {["name", "email", "message"].map((field) => (
            <motion.div
              key={field}
              variants={inputVariants}
              whileHover="hover"
              transition={{ type: "spring", stiffness: 200 }}
              className="relative"
            >
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  placeholder={field === "name" ? "Your Name" : "Your Email"}
                  className="peer w-full p-3 sm:p-4 pt-6 rounded-xl bg-zinc-800/50 placeholder-transparent text-white outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 transition-all text-sm sm:text-base"
                  disabled={loading}
                />
              ) : (
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  minLength={10}
                  className="peer w-full p-3 sm:p-4 pt-6 rounded-xl bg-zinc-800/50 placeholder-transparent text-white outline-none resize-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 transition-all text-sm sm:text-base"
                  disabled={loading}
                />
              )}
              <label className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-400 text-xs sm:text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-yellow-400 peer-focus:text-xs sm:peer-focus:text-sm">
                {field === "name"
                  ? "Your Name"
                  : field === "email"
                  ? "Your Email"
                  : "Your Message"}
              </label>
            </motion.div>
          ))}

          <motion.button
            type="submit"
            disabled={loading || !backendUrl}
            className={`bg-yellow-400 text-black font-bold py-3 px-6 rounded-xl shadow-lg text-lg transition-all flex justify-center items-center gap-3 ${
              loading || !backendUrl
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-yellow-400/60 hover:bg-yellow-300"
            }`}
            whileHover={loading || !backendUrl ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-6 w-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
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
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span>Send Message</span>
              </>
            )}
          </motion.button>

          <p className="text-gray-400 text-sm text-center mt-4">
            I'll respond within 24 hours
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default HireMeSection;
