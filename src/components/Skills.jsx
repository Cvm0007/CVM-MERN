// src/components/Skills.jsx
import React from 'react';
import { useEffect, useRef } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaAws, FaFigma, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiRedis, SiPhp, SiBookstack } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';
import Counter from './Counter';

/**
 * Skills Section Component
 * Features:
 * - Fully responsive grid layout for all screen sizes
 * - Interactive skill cards with hover effects
 * - Progress indicators for skill levels
 * - Dark/Light theme support
 * - Staggered animations
 * - Category-based organization
 * - Professional micro-interactions
 */
const Skills = () => {
  const { isDark } = useTheme();
  
  // Enhanced tech stack with skill levels and categories
  const techStack = [
    // Frontend Technologies
    { 
      icon: <FaHtml5 />, 
      name: 'HTML5', 
      category: 'Frontend',
      level: 72,
      color: 'text-orange-500', 
      darkColor: 'text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
      borderColor: 'border-orange-300 dark:border-orange-600'
    },
    { 
      icon: <FaCss3Alt />, 
      name: 'CSS3', 
      category: 'Frontend',
      level: 64,
      color: 'text-blue-500', 
      darkColor: 'text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      borderColor: 'border-blue-300 dark:border-blue-600'
    },
    { 
      icon: <FaJs />, 
      name: 'JavaScript', 
      category: 'Frontend',
      level: 86,
      color: 'text-yellow-500', 
      darkColor: 'text-yellow-400',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-300 dark:border-yellow-600'
    },
    // { 
    //   icon: <SiTypescript />, 
    //   name: 'TypeScript', 
    //   category: 'Frontend',
    //   level: 85,
    //   color: 'text-blue-600', 
    //   darkColor: 'text-blue-400',
    //   bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    //   borderColor: 'border-blue-300 dark:border-blue-600'
    // },
    { 
      icon: <FaReact />, 
      name: 'React.js', 
      category: 'Frontend',
      level: 68,
      color: 'text-cyan-400', 
      darkColor: 'text-cyan-300',
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/20',
      borderColor: 'border-cyan-300 dark:border-cyan-600'
    },
    // { 
    //   icon: <SiNextdotjs />, 
    //   name: 'Next.js', 
    //   category: 'Frontend',
    //   level: 88,
    //   color: 'text-gray-800', 
    //   darkColor: 'text-gray-300',
    //   bgColor: 'bg-gray-100 dark:bg-gray-800/50',
    //   borderColor: 'border-gray-300 dark:border-gray-600'
    // },
    // { 
    //   icon: <SiRedux />, 
    //   name: 'Redux', 
    //   category: 'Frontend',
    //   level: 86,
    //   color: 'text-purple-600', 
    //   darkColor: 'text-purple-400',
    //   bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    //   borderColor: 'border-purple-300 dark:border-purple-600'
    // },
    { 
      icon: <SiTailwindcss />, 
      name: 'Tailwind CSS', 
      category: 'Frontend',
      level: 70,
      color: 'text-teal-500', 
      darkColor: 'text-teal-400',
      bgColor: 'bg-teal-100 dark:bg-teal-900/20',
      borderColor: 'border-teal-300 dark:border-teal-600'
    },
    
    // Backend Technologies
    { 
      icon: <FaNodeJs />, 
      name: 'Node.js', 
      category: 'Backend',
      level: 59,
      color: 'text-green-600', 
      darkColor: 'text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      borderColor: 'border-green-300 dark:border-green-600'
    },
    { 
      icon: <SiPhp />, 
      name: 'PHP', 
      category: 'Backend',
      level: 57,
      color: 'text-pink-600', 
      darkColor: 'text-pink-400',
      bgColor: 'bg-pink-100 dark:bg-pink-900/20',
      borderColor: 'border-pink-300 dark:border-pink-600'
    },
    { 
      icon: <FaPython />, 
      name: 'Python', 
      category: 'Backend',
      level: 55,
      color: 'text-blue-500', 
      darkColor: 'text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      borderColor: 'border-blue-300 dark:border-blue-600'
    },
    
    // Database & Storage
    { 
      icon: <SiMongodb />, 
      name: 'MongoDB', 
      category: 'Database',
      level: 59,
      color: 'text-green-500', 
      darkColor: 'text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      borderColor: 'border-green-300 dark:border-green-600'
    },
    { 
      icon: <SiPostgresql />, 
      name: 'PostgreSQL', 
      category: 'Database',
      level: 57,
      color: 'text-blue-700', 
      darkColor: 'text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      borderColor: 'border-blue-300 dark:border-blue-600'
    },
    { 
      icon: <SiRedis />, 
      name: 'Redis', 
      category: 'Database',
      level: 55,
      color: 'text-red-600', 
      darkColor: 'text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/20',
      borderColor: 'border-red-300 dark:border-red-600'
    },
    
    // Tools & DevOps
    { 
      icon: <FaGitAlt />, 
      name: 'Git', 
      category: 'Tools',
      level: 70,
      color: 'text-red-500', 
      darkColor: 'text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/20',
      borderColor: 'border-red-300 dark:border-red-600'
    },
    { 
      icon: <FaGithub />, 
      name: 'GitHub', 
      category: 'Tools',
      level: 72,
      color: 'text-gray-700', 
      darkColor: 'text-gray-300',
      bgColor: 'bg-gray-100 dark:bg-gray-800/50',
      borderColor: 'border-gray-300 dark:border-gray-600'
    },
    { 
      icon: <FaDocker />, 
      name: 'Docker', 
      category: 'Tools',
      level: 54,
      color: 'text-blue-600', 
      darkColor: 'text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      borderColor: 'border-blue-300 dark:border-blue-600'
    },
    { 
      icon: <FaAws />, 
      name: 'AWS', 
      category: 'Tools',
      level: 56,
      color: 'text-orange-600', 
      darkColor: 'text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
      borderColor: 'border-orange-300 dark:border-orange-600'
    }
    // { 
    //   icon: <FaFigma />, 
    //   name: 'Figma', 
    //   category: 'Tools',
    //   level: 68,
    //   color: 'text-purple-600', 
    //   darkColor: 'text-purple-400',
    //   bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    //   borderColor: 'border-purple-300 dark:border-purple-600'
    // }
  ];

  // Group skills by category
  const skillsByCategory = techStack.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' 
        : 'bg-gradient-to-br from-violet-50 via-orange-50 to-pink-50'
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
            Tech <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">Stack</span>
             & 
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">Skills</span>
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Comprehensive expertise across modern web technologies and development tools.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  {category}
                </h3>
                <div className={`w-24 h-1 mx-auto rounded-full ${
                  category === 'Frontend' ? 'bg-cyan-500' :
                  category === 'Backend' ? 'bg-green-500' :
                  category === 'Database' ? 'bg-blue-500' :
                  'bg-purple-500'
                }`} />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`group relative p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${skill.bgColor} ${skill.borderColor} backdrop-blur-sm hover:animate-pulse`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + index * 0.1,
                      duration: 0.0,
                    }}
                  >
                    {/* Skill Icon */}
                    <div className={`text-3xl sm:text-4xl mb-3 sm:mb-4 ${isDark ? skill.darkColor : skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    
                    {/* Skill Name */}
                    <h4 className={`text-sm sm:text-base font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-700'
                    }`}>
                      {skill.name}
                    </h4>
                    
                    {/* Skill Level */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`text-xs sm:text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          Proficiency
                        </span>
                        <span className={`text-xs sm:text-sm font-bold ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className={`w-full h-2 rounded-full overflow-hidden ${
                        isDark ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <motion.div
                          className={`h-full rounded-full ${
                            category === 'Frontend' ? 'bg-cyan-500' :
                            category === 'Backend' ? 'bg-green-500' :
                            category === 'Database' ? 'bg-blue-500' :
                            'bg-purple-500'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1,
                            delay: categoryIndex * 0.2 + index * 0.1 + 0.5,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-t ${
                      category === 'Frontend' ? 'from-cyan-500/10 to-transparent' :
                      category === 'Backend' ? 'from-green-500/10 to-transparent' :
                      category === 'Database' ? 'from-blue-500/10 to-transparent' :
                      'from-purple-500/10 to-transparent'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1 }}
          className={`mt-16 p-6 sm:p-8 rounded-2xl ${
            isDark 
              ? 'bg-gray-800/50 border border-gray-700' 
              : 'bg-white/70 border border-gray-200'
          } backdrop-blur-sm`}
        >
          <div className="text-center">
            <h4 className={`text-xl sm:text-2xl font-bold mb-4 ${
              isDark ? 'text-orange-400' : 'text-orange-600'
            }`}>
              Always Learning & Growing
            </h4>
            <p className={`text-sm sm:text-base max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring advanced React patterns, microservices architecture, and cloud-native development.
            </p>
            
            {/* Learning Progress Indicators */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 ">
              {[
                { label: 'Courses Completed', value: '10', icon: '🎓' },
                { label: 'Certificates', value: '9', icon: '🏆' },
                { label: 'Learning Hours', value: '1008', icon: '⏰' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className={`p-4 rounded-lg ${
                    isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.0 + index * 0.1 }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className={`text-xl sm:text-2xl font-bold animate-glow ${
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    <Counter value={item.value} />+
                  </div>
                  <div className={`text-xs sm:text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {[
                { label: "Courses Completed", value: 10, icon: "🎓" },
                { label: "Certificates", value: 9, icon: "🏆" },
                { label: "Learning Hours", value: 1008, icon: "⏰" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className={`p-4 rounded-lg ${isDark ? "bg-gray-700/50" : "bg-gray-100/50"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>

                  <div
                    className={`text-xl sm:text-2xl font-bold animate-glow ${isDark ? "text-purple-400" : "text-purple-600"
                      }`}
                  >
                    <Counter value={item.value} />+
                  </div>

                  <div
                    className={`text-xs sm:text-sm ${isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
