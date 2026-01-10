import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaDatabase, FaArrowRight, FaGitAlt, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiJavascript, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

/**
 * About Section Component
 * Features:
 * - Fully responsive layout for all screen sizes
 * - Professional avatar display with hover effects
 * - Tech stack badges with animations
 * - Dark/Light theme support
 * - Progressive animation delays
 * - Interactive hover states
 * - Call-to-action button
 */
const About = () => {
  const { isDark } = useTheme();
  const MotionLink = motion(Link);
  
  // Tech stack data for easier maintenance
  const techStack = [
    { icon: <FaReact />, name: 'React', color: 'purple' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: 'indigo' },
    { icon: <FaNodeJs />, name: 'Node.js', color: 'green' },
    { icon: <SiMongodb />, name: 'MongoDB', color: 'yellow' },
    { icon: <SiJavascript />, name: 'JavaScript', color: 'pink' },
    { icon: <FaCss3Alt />, name: 'CSS', color: 'pink' },
    // { icon: <SiTypescript />, name: 'TypeScript', color: 'blue' },
    { icon: <FaGitAlt />, name: 'Git', color: 'red' },
    // { icon: <FaDatabase />, name: 'SQL', color: 'orange' }
  ];
  
  return (
    <section
      id="about"
      className={`w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100' 
          : 'bg-gradient-to-b from-white via-orange-50 to-pink-100 text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">Me</span>
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Get to know the developer behind the code.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Avatar Side - Enhanced mobile layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative">
              {/* Avatar Container */}
              <motion.div
                className={`relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 ${
                  isDark ? 'border-purple-600' : 'border-purple-400'
                }`}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="./Shivam.png" // Replace with real image
                  alt="Shivam Avatar"
                  className="object-cover w-full h-full"
                />
                
                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-full border-8 ${
                    isDark ? 'border-purple-400' : 'border-purple-300'
                  }`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ borderStyle: 'dashed' }}
                />
              </motion.div>
              
              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                1+
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                20+
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side - Enhanced mobile layout */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${
                isDark ? 'text-purple-400' : 'text-purple-700'
              }`}>
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">Shivam Narayan</span>
              </h3>
              
              <p className={`text-base sm:text-lg mb-6 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                A passionate <span className={`font-semibold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>MERN Stack Developer </span> 
                  turning ideas into full-stack web magic. From UI polish to backend performance, I love building things
                that solve problems and look good doing it.
              </p>
            </motion.div>

            {/* Secondary Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`text-sm sm:text-base mb-8 leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Currently growing as a developer, sharpening my React, Node.js & MongoDB skills while exploring design
              systems and efficient data modeling. Let's build something amazing together!
            </motion.p>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {[
                { number: '1+', label: 'Years Experience' },
                { number: '20+', label: 'Projects Completed' },
                { number: '99%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className={`text-center p-4 rounded-lg ${
                    isDark ? 'bg-gray-800/50' : 'bg-white/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`text-2xl sm:text-3xl font-bold ${
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    {stat.number}
                  </div>
                  <div className={`text-xs sm:text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Badges - Enhanced layout */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h4 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Tech Stack
              </h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:animate-pulse ${
                      isDark 
                        ? `text-${tech.color}-300 bg-${tech.color}-900/30 border border-${tech.color}-700` 
                        : `text-${tech.color}-700 bg-${tech.color}-100`
                    }`}
                    // whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {tech.icon}
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Contact Me CTA - Enhanced button */}
            <MotionLink
              to="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-600 hover:shadow-xl transition-all duration-300 font-semibold hover:animate-pulse"
            >
              Let's Work Together
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <FaArrowRight />
              </motion.div>
            </MotionLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
