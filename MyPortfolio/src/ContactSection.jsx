import React, { useState } from "react";
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData); // ✅ Debug

    setLoading(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const res = await axios.post(
        "https://codecraftbynitesh.onrender.com/api/hirerequests",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Response received:", res.data);
      toast.dismiss(toastId);
      toast.success(res.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error occurred:", err);
      toast.dismiss(toastId);

      if (err.response) {
        toast.error(err.response.data?.error || "Failed to send message.");
      } else if (err.request) {
        toast.error("Network error! Please check your connection.");
      } else {
        toast.error("Something went wrong!");
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
      {/* ✅ Keep only one Toaster in the entire app if possible */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: { zIndex: 9999 },
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
          Looking for a dedicated developer to bring your ideas to life? Let’s
          collaborate and build something amazing!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="w-full bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col gap-4 sm:gap-6 transform hover:scale-105 hover:shadow-yellow-400/50 transition-all"
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
              whileFocus="focus"
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
                />
              ) : (
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className="peer w-full p-3 sm:p-4 pt-6 rounded-xl bg-zinc-800/50 placeholder-transparent text-white outline-none resize-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 transition-all text-sm sm:text-base"
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
            disabled={loading}
            className={`bg-yellow-400 text-black font-bold py-3 rounded-xl shadow-lg text-lg transition-all flex justify-center items-center gap-2 ${
              loading
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-yellow-400/60"
            }`}
            whileHover={
              loading ? {} : { scale: 1.05, boxShadow: "0 0 25px #FACC15" }
            }
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-black"
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
            ) : null}
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default HireMeSection;
