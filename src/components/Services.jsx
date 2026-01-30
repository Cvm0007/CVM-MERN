import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDesktop, FaMobileAlt, FaServer, FaRocket, FaCode, FaDatabase, FaCloud, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

/**
 * Services Section Component
 * Features:
 * - Fully responsive layout for all screen sizes
 * - Interactive service cards with hover effects
 * - Dark/Light theme support
 * - Professional animations and micro-interactions
 * - Icon-based visual hierarchy
 */
const Services = () => {
  const { isDark } = useTheme();
  const MotionLink = motion(Link);
  
  // Enhanced services data with detailed information
  const services = [
    {
      icon: <FaDesktop className="text-3xl" />,
      title: 'Web Development',
      description: 'Modern, fast and responsive websites using React, Vite, TailwindCSS & more.',
      features: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      color: 'blue',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      borderColor: 'border-blue-300 dark:border-blue-600',
      iconColor: 'text-blue-500 dark:text-blue-400'
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: 'Responsive Design',
      description: 'Pixel-perfect mobile-friendly layouts with full responsiveness across devices.',
      features: ['Mobile-First', 'Cross-Browser', 'PWA', 'Touch-Friendly'],
      color: 'purple',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
      borderColor: 'border-purple-300 dark:border-purple-600',
      iconColor: 'text-purple-500 dark:text-purple-400'
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: 'Backend & API',
      description: 'Node.js, MongoDB, Express.js – clean architecture, REST APIs, auth and more.',
      features: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      color: 'green',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      borderColor: 'border-green-300 dark:border-green-600',
      iconColor: 'text-green-500 dark:text-green-400'
    },
    // {
    //   icon: <FaRocket className="text-3xl" />,
    //   title: 'Deployment & SEO',
    //   description: 'Deploying with Netlify/Vercel, SEO optimization & site performance tweaks.',
    //   features: ['Vercel', 'Netlify', 'SEO', 'Performance'],
    //   color: 'orange',
    //   bgColor: 'bg-orange-100 dark:bg-orange-900/20',
    //   borderColor: 'border-orange-300 dark:border-orange-600',
    //   iconColor: 'text-orange-500 dark:text-orange-400'
    // },
    // {
    //   icon: <FaCode className="text-3xl" />,
    //   title: 'Code Quality',
    //   description: 'Clean, maintainable code with best practices and comprehensive testing.',
    //   features: ['Clean Code', 'Testing', 'Documentation', 'Code Review'],
    //   color: 'pink',
    //   bgColor: 'bg-pink-100 dark:bg-pink-900/20',
    //   borderColor: 'border-pink-300 dark:border-pink-600',
    //   iconColor: 'text-pink-500 dark:text-pink-400'
    // },
    // {
    //   icon: <FaCloud className="text-3xl" />,
    //   title: 'Cloud Solutions',
    //   description: 'Scalable cloud infrastructure and modern deployment strategies.',
    //   features: ['AWS', 'Docker', 'CI/CD', 'Monitoring'],
    //   color: 'cyan',
    //   bgColor: 'bg-cyan-100 dark:bg-cyan-900/20',
    //   borderColor: 'border-cyan-300 dark:border-cyan-600',
    //   iconColor: 'text-cyan-500 dark:text-cyan-400'
    // }
  ];
  
  return (
    <section className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-tl from-gray-900 via-purple-900/20 to-gray-900' 
        : 'bg-gradient-to-tl from-violet-50 via-pink-50 to-orange-50'
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
            What I <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">Offer</span>
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Comprehensive web development services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`group relative p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${service.bgColor} ${service.borderColor} backdrop-blur-none sm:backdrop-blur-sm`}
              whileHover={{ scale: 1.03, y: -10 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.1
              }}
            >
              {/* Service Icon */}
              <motion.div 
                className={`mb-6 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5, y: -5 }}
              >
                {service.icon}
              </motion.div>
              
              {/* Service Title */}
              <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className={`text-sm sm:text-base mb-6 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
              
              {/* Service Features */}
              <div className="space-y-2">
                <p className={`text-xs sm:text-sm font-semibold ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Key Features:
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={feature}
                      className={`px-2 py-1 text-xs rounded-full ${
                        isDark 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-t from-${service.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              
              {/* Learn More Button */}
              <MotionLink
                to="/projects"
                className={`mt-6 text-sm font-semibold ${service.iconColor} hover:underline`}
                whileHover={{ x: 5  }}
                transition={{ duration: 0.2 }}
              >
                Learn More →
              </MotionLink>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1, delay: 0.1 }}
          className={`mt-16 p-6 sm:p-8 rounded-2xl text-center ${
            isDark 
              ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-700' 
              : 'bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300'
          }`}
        >
          <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${
            isDark ? 'text-orange-400' : 'text-orange-600'
          }`}>
            Ready to start your project?
          </h3>
          <p className={`text-sm sm:text-base mb-6 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's discuss how I can help bring your ideas to life with professional web development services.
          </p>
          <MotionLink
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-600 hover:shadow-xl transition-all duration-300 font-semibold hover:animate-pulse"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
            <FaArrowRight />
            </motion.div>
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
