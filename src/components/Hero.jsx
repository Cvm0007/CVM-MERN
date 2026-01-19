import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'lottie-react';
import devAnimation from '../assets/dev-lottie.json';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

/**
 * Hero Section Component
 * Features:
 * - Fully responsive layout for all screen sizes
 * - Animated typing effect for role display
 * - Interactive Lottie animation
 * - Dark/Light theme support
 * - Professional animations and micro-interactions
 * - Call-to-action buttons with hover effects
 * - Social media links with animations
 */
const Hero = () => {
  const { isDark } = useTheme();
  const MotionLink = motion(Link);

  
  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' 
          : 'bg-gradient-to-br from-orange-100 via-pink-100 to-violet-100'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Enhanced mobile layout */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Greeting and Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className={`text-lg sm:text-xl font-medium mb-2 ${
                isDark ? 'text-purple-400' : 'text-purple-600'
              }`}>
                Welcome to my Portfolio
              </p>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">Shivam Narayan</span>
              </h1>
            </motion.div>

            {/* Animated Role Display */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
                isDark ? 'text-gray-100' : 'text-gray-800'
              }`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
                  <TypeAnimation
                    sequence={[
                      'JavaScript Developer 🚀',
                      3000,
                      'React Developer💡',
                      3000,
                      'MERN Stack Engineer 💻',
                      3000,
                      'UI/UX Enthusiast 🎨',
                      3000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    cursor={true}
                  />
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className={`text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Crafting full-stack experiences with React, Node.js & MongoDB. Passionate about clean code, intuitive UI, and scalable web applications that make a difference.
            </motion.p>

            {/* CTA Buttons - Enhanced mobile layout */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:animate-pulse"
              >
                <span className="flex items-center justify-center gap-2">
                  Hire Me
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    →
                  </motion.span>
                </span>
              </MotionLink>

              <MotionLink
                to="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg shadow hover:shadow-md transition-all duration-300 text-center hover:animate-pulse ${
                  isDark 
                    ? 'text-purple-500 border-2 border-purple-400 bg-gray-800/60 backdrop-blur-md hover:bg-gray-700' 
                    : 'text-purple-700 border-2 border-purple-400 bg-white/60 backdrop-blur-md hover:bg-purple-100'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  My Projects
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  > →
                  </motion.span>
                </span>
              </MotionLink>

              {/* Resume Download Button */}
              <motion.a
                href="/Shivam_React_MERN.pdf"
                download
                initial={{ opacity: 1, rotate: 180 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg shadow hover:shadow-md transition-all duration-300 text-center animate-glow ${
                  isDark 
                    ? 'text-green-300 border-2 border-green-400 bg-gray-800/60 backdrop-blur-md hover:bg-gray-700' 
                    : 'text-green-700 border-2 border-green-400 bg-white/60 backdrop-blur-md hover:bg-green-100'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <FaDownload />
                  Resume
                </span>
              </motion.a>
            </motion.div>

            {/* Social Icons - Enhanced layout */}
            <motion.div
              className="flex gap-4 sm:gap-6 justify-center lg:justify-start text-xl sm:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {[
                { href: "https://github.com/Cvm0007", icon: <FaGithub />, color: isDark ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-black' },
                { href: "https://linkedin.com/in/cvm-mern", icon: <FaLinkedin />, color: 'text-blue-600 hover:text-blue-800' },
                { href: "mailto:mahtha.s@gmail.com", icon: <FaEnvelope />, color: 'text-red-500 hover:text-red-700' }
              ].map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className={`transition-all duration-300 drop-shadow-md hover:drop-shadow-xl ${social.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated Lottie Image - Enhanced responsive sizing */}
          <motion.div
            className="flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`w-full max-w-sm sm:max-w-md mx-auto rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 ${
                isDark 
                  ? 'shadow-purple-800/50 bg-gray-800/60 backdrop-blur-sm' 
                  : 'shadow-purple-300 bg-white/60 backdrop-blur-sm'
              }`}
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-64 sm:h-80 lg:h-96">
                <Lottie 
                  animationData={devAnimation} 
                  loop={true}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-6 h-10 border-2 rounded-full flex justify-center ${
              isDark ? 'border-purple-400' : 'border-purple-600'
            }`}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-1 h-3 rounded-full mt-2 ${
                isDark ? 'bg-purple-400' : 'bg-purple-600'
              }`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
