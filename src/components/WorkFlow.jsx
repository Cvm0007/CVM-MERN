import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaRocket, FaPalette, FaSearch, FaDraftingCompass, FaTools, FaChartLine } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

/**
 * Workflow Section Component
 * Features:
 * - Fully responsive layout for all screen sizes
 * - Interactive workflow steps with hover effects
 * - Progress indicators and visual flow
 * - Dark/Light theme support
 * - Professional animations and micro-interactions
 * - Step-by-step process visualization
 */
const Workflow = () => {
  const { isDark } = useTheme();
  
  // Enhanced workflow steps with detailed information
  const workflowSteps = [
    {
      icon: <FaSearch className="text-3xl" />,
      title: '1. Discovery & Research',
      description: 'Understanding your requirements, target audience, and business objectives through comprehensive research and analysis.',
      deliverables: ['Requirements Analysis', 'User Research', 'Competitive Analysis', 'Technical Feasibility'],
      color: 'purple',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
      borderColor: 'border-purple-300 dark:border-purple-600',
      iconColor: 'text-purple-500 dark:text-purple-400'
    },
    {
      icon: <FaDraftingCompass className="text-3xl" />,
      title: '2. Planning & Design',
      description: 'Creating wireframes, mockups, and design systems tailored for user-friendly, responsive interfaces.',
      deliverables: ['Wireframes', 'UI/UX Design', 'Design System', 'Prototypes'],
      color: 'pink',
      bgColor: 'bg-pink-100 dark:bg-pink-900/20',
      borderColor: 'border-pink-300 dark:border-pink-600',
      iconColor: 'text-pink-500 dark:text-pink-400'
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: '3. Development',
      description: 'Building pixel-perfect components using React, Tailwind & animation libraries with clean, maintainable code.',
      deliverables: ['Frontend Development', 'Backend Integration', 'API Development', 'Database Design'],
      color: 'blue',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      borderColor: 'border-blue-300 dark:border-blue-600',
      iconColor: 'text-blue-500 dark:text-blue-400'
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: '4. Testing & Quality Assurance',
      description: 'Comprehensive testing including unit tests, integration tests, and user acceptance testing.',
      deliverables: ['Unit Testing', 'Integration Testing', 'Performance Testing', 'Security Testing'],
      color: 'green',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      borderColor: 'border-green-300 dark:border-green-600',
      iconColor: 'text-green-500 dark:text-green-400'
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: '5. Deployment & Launch',
      description: 'Optimizing, deploying to production with full responsiveness, SEO, and performance monitoring.',
      deliverables: ['Production Deployment', 'Performance Optimization', 'SEO Implementation', 'Monitoring Setup'],
      color: 'orange',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
      borderColor: 'border-orange-300 dark:border-orange-600',
      iconColor: 'text-orange-500 dark:text-orange-400'
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: '6. Maintenance & Growth',
      description: 'Ongoing support, performance monitoring, and continuous improvement based on user feedback.',
      deliverables: ['Bug Fixes', 'Feature Updates', 'Performance Monitoring', 'Analytics Review'],
      color: 'cyan',
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/20',
      borderColor: 'border-cyan-300 dark:border-cyan-600',
      iconColor: 'text-cyan-500 dark:text-cyan-400'
    }
  ];
  
  return (
    <section className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-bl from-gray-900 via-purple-900/20 to-gray-900' 
        : 'bg-gradient-to-bl from-orange-50 via-violet-50 to-pink-50'
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
            Development <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">Workflow</span> 🧩
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A systematic approach to building exceptional digital experiences
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="space-y-8 sm:space-y-12">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className={`relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-8 lg:gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.6
              }}
            >
              {/* Step Number */}
              <motion.div
                className={`absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 top-8 lg:top-1/2 lg:-translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                  step.color === 'purple' ? 'bg-purple-500' :
                  step.color === 'pink' ? 'bg-pink-500' :
                  step.color === 'blue' ? 'bg-blue-500' :
                  step.color === 'green' ? 'bg-green-500' :
                  step.color === 'orange' ? 'bg-orange-500' :
                  'bg-cyan-500'
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {index + 1}
              </motion.div>

              {/* Step Card */}
              <motion.div
                className={`relative flex-1 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${step.bgColor} ${step.borderColor} backdrop-blur-sm lg:ml-16`}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Step Icon */}
                <motion.div 
                  className={`mb-6 ${step.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  {step.icon}
                </motion.div>
                
                {/* Step Title */}
                <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className={`text-sm sm:text-base mb-6 leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {step.description}
                </p>
                
                {/* Step Deliverables */}
                <div className="space-y-3">
                  <p className={`text-xs sm:text-sm font-semibold ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Key Deliverables:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <motion.div
                        key={deliverable}
                        className={`flex items-center gap-2 p-2 rounded-lg ${
                          isDark 
                            ? 'bg-gray-800/50 text-gray-300' 
                            : 'bg-gray-100/50 text-gray-700'
                        }`}
                        whileHover={{ scale: 1.02, x: 5 }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + deliverableIndex * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          step.color === 'purple' ? 'bg-purple-500' :
                          step.color === 'pink' ? 'bg-pink-500' :
                          step.color === 'blue' ? 'bg-blue-500' :
                          step.color === 'green' ? 'bg-green-500' :
                          step.color === 'orange' ? 'bg-orange-500' :
                          'bg-cyan-500'
                        }`} />
                        <span className="text-xs sm:text-sm">{deliverable}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-t from-${step.color}-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>

              {/* Connection Line */}
              {index < workflowSteps.length - 1 && (
                <motion.div
                  className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-12 ${
                    isDark ? 'bg-gray-700' : 'bg-gray-300'
                  }`}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Process Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className={`mt-16 p-6 sm:p-8 rounded-2xl ${
            isDark 
              ? 'bg-gray-800/50 border border-gray-700' 
              : 'bg-white/70 border border-gray-200'
          } backdrop-blur-sm`}
        >
          <div className="text-center">
            <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Why This Workflow Works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: 'Iterative Approach',
                  description: 'Continuous improvement through feedback loops',
                  icon: '🔄'
                },
                {
                  title: 'Quality First',
                  description: 'Comprehensive testing at every stage',
                  icon: '✅'
                },
                {
                  title: 'Client Collaboration',
                  description: 'Regular updates and transparent communication',
                  icon: '🤝'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`p-4 rounded-lg ${
                    isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className={`text-lg font-bold mb-2 ${
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
