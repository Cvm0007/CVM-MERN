import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

/**
 * Testimonials Section Component
 * Features:
 * - Fully responsive layout for all screen sizes
 * - Interactive testimonial cards with hover effects
 * - Star ratings and client information
 * - Dark/Light theme support
 * - Professional animations and micro-interactions
 * - Social media links for clients
 */
const Testimonials = () => {
  const { isDark } = useTheme();
  
  // Enhanced testimonials data with detailed information
  const testimonials = [
    {
      name: 'Ankita Sharma',
      role: 'Startup Founder',
      company: 'TechVentures Inc.',
      avatar: 'AS',
      rating: 5,
      feedback: 'Shivam is a magician! He turned our basic idea into a stunning app with pixel-perfect UI and blazing speed. Highly recommend him!',
      project: 'E-commerce Platform',
      duration: '3 months',
      social: {
        linkedin: 'https://linkedin.com/in/ankita-sharma',
        twitter: 'https://twitter.com/ankitasharma'
      }
    },
    {
      name: 'Ravi Mishra',
      role: 'Project Manager',
      company: 'TechNova Solutions',
      avatar: 'RM',
      rating: 5,
      feedback: 'Loved working with Shivam. He is clear, fast, and always professional. His React skills are top-tier and well-tested in our projects.',
      project: 'SaaS Dashboard',
      duration: '4 months',
      social: {
        linkedin: 'https://linkedin.com/in/ravi-mishra',
        github: 'https://github.com/ravimishra'
      }
    },
    {
      name: 'Simran Raj',
      role: 'Freelance Client',
      company: 'Creative Studio',
      avatar: 'SR',
      rating: 5,
      feedback: 'Very polite and helpful, and delivered way before the deadline. The animations and responsiveness were beyond expectations.',
      project: 'Portfolio Website',
      duration: '2 months',
      social: {
        linkedin: 'https://linkedin.com/in/simran-raj',
        twitter: 'https://twitter.com/simranraj'
      }
    },
    {
      name: 'Amit Kumar',
      role: 'CTO',
      company: 'InnovateTech',
      avatar: 'AK',
      rating: 5,
      feedback: 'Exceptional developer with great problem-solving skills. Built our entire MVP in record time with clean, scalable code.',
      project: 'MVP Development',
      duration: '6 months',
      social: {
        linkedin: 'https://linkedin.com/in/amit-kumar',
        github: 'https://github.com/amitkumar'
      }
    },
    {
      name: 'Priya Singh',
      role: 'Product Designer',
      company: 'DesignHub',
      avatar: 'PS',
      rating: 5,
      feedback: 'Shivam perfectly translated our designs into code. His attention to detail and understanding of UX principles is impressive.',
      project: 'Design System',
      duration: '3 months',
      social: {
        linkedin: 'https://linkedin.com/in/priya-singh',
        twitter: 'https://twitter.com/priyasingh'
      }
    },
    {
      name: 'John Doe',
      role: 'Marketing Director',
      company: 'GrowthCo',
      avatar: 'JD',
      rating: 5,
      feedback: 'Outstanding work on our marketing platform. The site loads instantly and handles thousands of concurrent users without issues.',
      project: 'Marketing Platform',
      duration: '5 months',
      social: {
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe'
      }
    }
  ];
  
  return (
    <section className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' 
        : 'bg-gradient-to-br from-pink-50 via-orange-50 to-violet-50'
    }`}>
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
            Client's <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">Love</span>
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            What my clients say about working with me..
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className={`group relative p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                isDark 
                  ? 'bg-gray-800/60 backdrop-blur-sm border-gray-700 hover:border-purple-600' 
                  : 'bg-white border-gray-200 hover:border-purple-300'
              }`}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6
              }}
            >
              {/* Quote Icon */}
              <motion.div
                className={`absolute top-4 right-4 text-2xl ${
                  isDark ? 'text-purple-400/20' : 'text-purple-600/20'
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaQuoteLeft />
              </motion.div>

              {/* Client Avatar and Info */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-4 ${
                  isDark ? 'bg-purple-600' : 'bg-purple-500'
                }`}>
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h4 className={`text-base sm:text-lg font-bold ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <motion.div
                    key={starIndex}
                    className="text-yellow-400 text-sm sm:text-base"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: index * 0.1 + starIndex * 0.1,
                      duration: 0.3
                    }}
                  >
                    <FaStar />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className={`text-sm sm:text-base mb-6 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                "{testimonial.feedback}"
              </blockquote>

              {/* Project Info */}
              <div className={`text-xs sm:text-sm mb-4 p-3 rounded-lg ${
                isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'
              }`}>
                <div className="flex justify-between items-center">
                  <span className={`font-semibold ${
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    Project:
                  </span>
                  <span className={
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }>
                    {testimonial.project}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className={`font-semibold ${
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    Duration:
                  </span>
                  <span className={
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }>
                    {testimonial.duration}
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {testimonial.social.linkedin && (
                  <motion.a
                    href={testimonial.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDark 
                        ? 'bg-gray-700/50 text-gray-400 hover:text-blue-400' 
                        : 'bg-gray-100/50 text-gray-600 hover:text-blue-600'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin size={16} />
                  </motion.a>
                )}
                {testimonial.social.twitter && (
                  <motion.a
                    href={testimonial.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDark 
                        ? 'bg-gray-700/50 text-gray-400 hover:text-blue-400' 
                        : 'bg-gray-100/50 text-gray-600 hover:text-blue-400'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTwitter size={16} />
                  </motion.a>
                )}
                {testimonial.social.github && (
                  <motion.a
                    href={testimonial.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDark 
                        ? 'bg-gray-700/50 text-gray-400 hover:text-white' 
                        : 'bg-gray-100/50 text-gray-600 hover:text-black'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={16} />
                  </motion.a>
                )}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className={`mt-16 p-6 sm:p-8 rounded-2xl text-center ${
            isDark 
              ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-700' 
              : 'bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300'
          }`}
        >
          <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Ready to be my next happy client?
          </h3>
          <p className={`text-sm sm:text-base mb-6 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join the list of satisfied clients who have experienced professional web development services.
          </p>
          <motion.a
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-600 hover:shadow-xl transition-all duration-300 font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
