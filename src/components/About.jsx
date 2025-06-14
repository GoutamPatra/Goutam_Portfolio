import React from 'react';
import ABOUT from '../assets/About.png';
import HTML from '../assets/html.svg';
import CSS from '../assets/css.svg';
import JAVASCRIPT from '../assets/javascript.svg';
import NODEJS from '../assets/nodejs.svg';
import REACT from '../assets/react.svg';
import GITHUB from '../assets/github.svg';
import MONGODB from '../assets/mongodb.svg';
import EXPRESS from '../assets/express-js.svg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-black text-white pt-12" id="aboutme">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-5">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-5">
          <img
            src={ABOUT}
            alt="Its here"
            className="w-92 h-92 mx-10 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="flex-1">
            <p className="text-base sm:text-lg mb-6 mt-6">
              Hi, I'm a passionate web developer focused on building clean,
              responsive, and user-friendly websites and applications.
              With experience in modern technologies like React, Vite,
              Tailwind CSS, and more, I enjoy turning ideas into real-world
              digital products. I'm always eager to learn new tools and create
              solutions that make a meaningful impact.
            </p>

            {/* Skills Progress Bars */}
            <div className="space-y-4">
              {[
                { label: 'HTML & CSS', width: 'w-10/12' },
                { label: 'Java Script', width: 'w-9/12' },
                { label: 'React JS', width: 'w-11/12' },
                { label: 'Node JS', width: 'w-9/12' },
                { label: 'C++', width: 'w-9/12' },
                { label: 'DSA', width: 'w-8/12' },
              ].map(({ label, width }, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <label className="w-24 sm:w-32 text-sm sm:text-base">{label}</label>
                  <div className="flex-1 bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-transform duration-300 hover:scale-105 ${width}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-col sm:flex-row justify-between text-center gap-6">
              {['Fresher', '3+ Projects Completed', 'Open to Work'].map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 transform transition-transform duration-300 hover:scale-110">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Tech Logos Section with Scroll Animation */}
        {/* ✅ Tech Logos Row 1: Left to Right */}
<motion.div
  className="mt-20"
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.4 }}
>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10 justify-items-center">
    {[HTML, CSS, JAVASCRIPT, NODEJS].map((logo, idx) => (
      <img
        key={idx}
        src={logo}
        alt="Tech Logo"
        className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform duration-200 hover:scale-125"
      />
    ))}
  </div>
</motion.div>

{/* ✅ Tech Logos Row 2: Right to Left */}
<motion.div
  className="mt-20 "
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.4 }}
>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10 justify-items-center">
    {[EXPRESS, REACT, GITHUB, MONGODB].map((logo, idx) => (
      <img
        key={idx}
        src={logo}
        alt="Tech Logo"
        className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform duration-200 hover:scale-125"
      />
    ))}
  </div>
</motion.div>

      </div>
    </div>
  );
};

export default About;
