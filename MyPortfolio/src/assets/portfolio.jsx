import React, { useEffect, useState } from "react";
import myPic from "../public/MyImg.png";

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

function Portfolio() {
  const projects = useCounter(23);
  const experience = useCounter(2);
  const feedback = useCounter(96);
  const team = useCounter(4);

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-1 flex-col md:flex-row items-center justify-between px-10 gap-10">
        {/* Left Side Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold leading-snug">
            Hey, I’m{" "}
            <span className="text-yellow-400">Nitesh Kumar Sharma</span>
            <br />a software developer from India
          </h2>
          <p className="text-gray-400">
            I build full-stack applications using React, Node.js, Express, and
            MongoDB. Passionate about creating impactful software solutions.
          </p>
          <p className="text-green-400 font-mono">
            # I develop tools for job portals, dashboards & freelancing
            platforms
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition">
              Hire Me
            </button>
            <button className="px-6 py-3 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition">
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={myPic}
            alt="profile"
            className="rounded-lg grayscale w-80 md:w-[400px] shadow-lg"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-zinc-800 py-10 px-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <h3 className="text-3xl font-bold text-yellow-400">{projects}+</h3>
          <p className="text-gray-400">Projects Development from scratch</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-yellow-400">{experience}+</h3>
          <p className="text-gray-400">Years of Experience</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-yellow-400">{feedback}%</h3>
          <p className="text-gray-400">Positive Feedback from work</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-yellow-400">{team}</h3>
          <p className="text-gray-400">People Team Lead</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
