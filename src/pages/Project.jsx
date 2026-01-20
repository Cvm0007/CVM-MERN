import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaCode, FaStar, FaCalendar, FaSearch, FaTimes } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import projectsData from '../data/projects.json';
import GoToTop from '../components/GoToTop';

/**
 * Projects Page Component
 * Features:
 * - Fully responsive layout for all screen sizes
 * - Interactive project cards with hover effects
 * - Advanced filtering by category and featured status
 * - Search functionality
 * - Dark/Light theme support
 * - Professional animations and micro-interactions
 * - Mobile-optimized grid layout
 * - Technology stack showcase
 */
const Projects = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique categories from projects data
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projectsData.map(project => project.category))];
    return cats;
  }, []);

  // Filter projects based on category, featured status, and search term
  const filteredProjects = useMemo(() => {
    let filtered = projectsData;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    // Filter by featured status
    if (showFeaturedOnly) {
      filtered = filtered.filter(project => project.featured);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return filtered;
  }, [selectedCategory, showFeaturedOnly, searchTerm]);

  // All blogs and pagination states
  const PROJECTS_PER_PAGE = 6;
  const [projectsPage, setProjectsPage] = useState(1);

  const totalProjectsPages = Math.ceil(
    filteredProjects.length / PROJECTS_PER_PAGE
  );

  const paginatedProjects = filteredProjects.slice(
    (projectsPage - 1) * PROJECTS_PER_PAGE,
    projectsPage * PROJECTS_PER_PAGE
  );

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory('All');
    setShowFeaturedOnly(false);
    setSearchTerm('');
  };

  // Project Card Component
  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border ${
        isDark 
          ? 'bg-gray-800 border-gray-700 hover:border-purple-600' 
          : 'bg-white border-gray-200 hover:border-purple-300'
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = "../lotuss.png"; // Fallback image
          }}
        />
        
        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
            className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg"
          >
            <FaStar className="text-yellow-300" />
            Featured
          </motion.div>
        )}
        
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions Overlay */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Link
              to={`/project/${project.id}`}
              className="flex-1 flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm font-medium shadow-lg"
            >
              <FaExternalLinkAlt size={12} />
              Details
            </Link>
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg hover:bg-white transition-colors shadow-lg"
              aria-label="GitHub Repository"
            >
              <FaGithub size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6">
        {/* Title and Category */}
        <div className="flex items-start justify-between mb-3">
          <h3 className={`text-lg sm:text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {project.title}
          </h3>
          <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
            isDark 
              ? 'bg-purple-900/30 text-purple-400' 
              : 'bg-purple-100 text-purple-600'
          }`}>
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className={`text-sm mb-4 line-clamp-3 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <motion.span 
              key={i} 
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
              className={`text-xs px-2 py-1 rounded-md group-hover:text-purple-600 dark:group-hover:text-purple-400 ${
                isDark 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className={`text-xs ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}>
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Date and Actions */}
        <div className="flex items-center justify-between">
          <div className={`flex items-center gap-2 text-xs ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            <FaCalendar className='text-orange-400'/>
            {new Date(project.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short' 
            })}
          </div>
          
          <div className="flex gap-2">
            <Link
              to={`/project/${project.id}`}
              className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                isDark 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600'
              }`}
            >
              <FaExternalLinkAlt size={12} />
              <span className="hidden sm:inline">View</span>
            </Link>
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="GitHub Repository"
            >
              <FaGithub size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className={`min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <GoToTop />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
                isDark ? 'bg-purple-600' : 'bg-purple-500'
              }`}
            >
              <FaCode className="text-white text-xl sm:text-2xl" />
            </motion.div>
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent`}>
              Projects Portfolio
            </h1>
          </div>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Explore my collection of full-stack applications, showcasing expertise in modern web technologies 
            and innovative solutions to real-world problems.
          </p>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`mb-8 p-4 sm:p-6 rounded-xl shadow-lg border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search projects by title, description, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-10 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500' 
                    : 'bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-purple-400 focus:border-purple-400'
                }`}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-colors ${
                    isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                  }`}
                >
                  <FaTimes className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                </button>
              )}
            </div>
          </div>

          {/* Category and Featured Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-3">
              <FaFilter className={isDark ? 'text-purple-400' : 'text-purple-600'} />
              <span className={`text-sm font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Filter by:
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                        : isDark 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Featured Toggle and Clear Filters */}
            <div className="flex gap-3">
              <motion.button
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  showFeaturedOnly
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                    : isDark 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaStar className={showFeaturedOnly ? 'text-yellow-300' : ''} />
                <span className="hidden sm:inline">Featured Only</span>
                <span className="sm:hidden">★</span>
              </motion.button>
              
              {(selectedCategory !== 'All' || showFeaturedOnly || searchTerm) && (
                <motion.button
                  onClick={clearFilters}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes />
                  <span className="hidden sm:inline">Clear</span>
                </motion.button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`mt-4 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Showing {filteredProjects.length} of {projectsData.length} projects
            {searchTerm && ` matching "${searchTerm}"`}
          </motion.div>
        </motion.div>

        {/* Projects Section */}
        <div className="mb-12">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-800"
              }`}
          >
          Projects & Applications
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {paginatedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Pagination */}
          {totalProjectsPages > 1 && (
            <div className="mt-8 flex justify-center">
              <div className="flex gap-3 overflow-x-auto px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-sm scrollbar-hide">
                {Array.from({ length: totalProjectsPages }).map((_, i) => {
                  const page = i + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => setProjectsPage(page)}
                      className={`min-w-[40px] h-10 rounded-full font-semibold transition-all ${projectsPage === page
                          ? "bg-purple-600 text-white scale-110"
                          : "bg-white/20 text-gray-600 dark:text-gray-300 hover:bg-purple-500 hover:text-white"
                        }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-center py-20 rounded-2xl ${
              isDark 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className={`text-6xl mb-4 ${
                isDark ? 'text-gray-600' : 'text-gray-400'
              }`}
            >
              <FaCode />
            </motion.div>
            <h3 className={`text-xl font-semibold mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              No projects found
            </h3>
            <p className={`mb-6 ${
              isDark ? 'text-gray-500' : 'text-gray-600'
            }`}>
              Try adjusting your filters or search term to see more projects.
            </p>
            <motion.button
              onClick={clearFilters}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear All Filters
            </motion.button>
          </motion.div>
        )}

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`p-6 sm:p-8 rounded-2xl shadow-lg border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-6 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'AWS'].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium ${
                  isDark 
                    ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30 text-purple-300 border border-purple-700/30' 
                    : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-300/50'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
