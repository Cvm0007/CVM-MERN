import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCalendar, 
  FaClock, 
  FaTag, 
  FaFilter, 
  FaStar,
  FaNewspaper,
  FaSearch,
  FaTimes,
  FaUser,
  FaArrowRight
} from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import blogsData from '../data/blogs.json';
import GoToTop from '../components/GoToTop';

/**
 * Blog Page Component
 * Features:
 * - Fully responsive layout for all screen sizes
 * - Interactive blog cards with hover effects
 * - Advanced filtering by tags and featured status
 * - Search functionality
 * - Dark/Light theme support
 * - Professional animations and micro-interactions
 * - Mobile-optimized grid layout
 * - Popular topics section
 */
const Blog = () => {
  const { isDark } = useTheme();
  const [selectedTag, setSelectedTag] = useState('All');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique tags from blogs data
  const tags = useMemo(() => {
    const allTags = blogsData.flatMap(blog => blog.tags);
    return ['All', ...new Set(allTags)];
  }, []);

  // Filter blogs based on tag, featured status, and search term
  const filteredBlogs = useMemo(() => {
    let filtered = blogsData;
    
    // Filter by tag
    if (selectedTag !== 'All') {
      filtered = filtered.filter(blog => blog.tags.includes(selectedTag));
    }
    
    // Filter by featured status
    if (showFeaturedOnly) {
      filtered = filtered.filter(blog => blog.featured);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort by date (newest first)
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [selectedTag, showFeaturedOnly, searchTerm]);

  // Clear all filters
  const clearFilters = () => {
    setSelectedTag('All');
    setShowFeaturedOnly(false);
    setSearchTerm('');
  };

  // Blog Card Component
  const BlogCard = ({ blog, index, featured = false }) => (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border ${
        isDark 
          ? 'bg-gray-800 border-gray-700 hover:border-purple-600' 
          : 'bg-white border-gray-200 hover:border-purple-300'
      } ${featured ? 'md:col-span-2' : ''}`}
    >
      {/* Blog Image */}
      <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Featured Badge */}
        {blog.featured && (
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
        
        {/* Quick Read Overlay */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/blog/${blog.slug}`}
            className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg hover:bg-white transition-colors text-sm font-medium shadow-lg"
          >
            <FaArrowRight />
            Read Article
          </Link>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-4 sm:p-6">
        {/* Meta Information */}
        <div className={`flex items-center gap-3 sm:gap-4 text-xs sm:text-sm mb-3 ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          <span className="flex items-center gap-1">
            <FaCalendar />
            {new Date(blog.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </span>
          <span className="flex items-center gap-1">
            <FaClock />
            {blog.readTime}
          </span>
          <span className="flex items-center gap-1">
            <FaUser />
            {blog.author}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-lg sm:text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className={`text-sm mb-4 line-clamp-3 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {blog.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.slice(0, 3).map((tag, i) => (
            <motion.span 
              key={i} 
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
              className={`text-xs px-2 py-1 rounded-md ${
                isDark 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tag}
            </motion.span>
          ))}
          {blog.tags.length > 3 && (
            <span className={`text-xs ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}>
              +{blog.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Read More Button */}
        <Link
          to={`/blog/${blog.slug}`}
          className={`inline-flex items-center gap-2 font-medium text-sm transition-colors ${
            isDark 
              ? 'text-purple-400 hover:text-purple-300' 
              : 'text-purple-600 hover:text-purple-700'
          }`}
        >
          Read More
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
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
              <FaNewspaper className="text-white text-xl sm:text-2xl" />
            </motion.div>
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent`}>
              Developer Blog
            </h1>
          </div>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Insights, tutorials, and thoughts on modern web development, 
            best practices, and the latest technology trends.
          </p>
        </motion.div>

        {/* Search and Filters */}
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
                placeholder="Search blog posts by title, content, or tags..."
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

          {/* Tag and Featured Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Tag Filter */}
            <div className="flex flex-wrap items-center gap-3">
              <FaFilter className={isDark ? 'text-purple-400' : 'text-purple-600'} />
              <span className={`text-sm font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Filter by tags:
              </span>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <motion.button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedTag === tag
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                        : isDark 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tag}
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
              
              {(selectedTag !== 'All' || showFeaturedOnly || searchTerm) && (
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
            Showing {filteredBlogs.length} of {blogsData.length} articles
            {searchTerm && ` matching "${searchTerm}"`}
          </motion.div>
        </motion.div>

        {/* Featured Blog */}
        {filteredBlogs.filter(blog => blog.featured).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <FaStar className="text-yellow-500" />
              </motion.div>
              Featured Article
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {filteredBlogs.filter(blog => blog.featured).slice(0, 1).map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} featured={true} />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredBlogs.filter(blog => !blog.featured).map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
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
              <FaNewspaper />
            </motion.div>
            <h3 className={`text-xl font-semibold mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              No articles found
            </h3>
            <p className={`mb-6 ${
              isDark ? 'text-gray-500' : 'text-gray-600'
            }`}>
              Try adjusting your filters or search terms to see more articles.
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

        {/* Popular Topics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`p-6 sm:p-8 rounded-2xl shadow-lg border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-6 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Popular Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'JavaScript', 'TypeScript', 'Node.js', 'CSS', 'Performance', 'Security'].map((tag, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30 text-purple-300 border border-purple-700/30 hover:from-purple-900/50 hover:to-pink-900/50' 
                    : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-300/50 hover:from-purple-200 hover:to-pink-200'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
