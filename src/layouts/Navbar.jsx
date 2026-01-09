import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaSun,
  FaMoon,
  FaUser,
  FaSignOutAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

/**
 * Responsive Navigation Bar Component
 * Features:
 * - Mobile-first responsive design
 * - Dark/Light theme support
 * - Authentication integration
 * - Smooth animations and micro-interactions
 * - Accessibility features
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();

  /**
   * Toggle mobile menu state
   * Handles menu open/close animations
   */
  const toggleMenu = () => setIsOpen(!isOpen);

  /**
   * Generate dynamic link classes based on active state and theme
   * @param {Object} props - NavLink props containing isActive
   * @returns {string} CSS classes for navigation links
   */
  const linkClasses = ({ isActive }) =>
    `relative px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${isActive
      ? "text-purple-600 dark:text-purple-400 font-bold"
      : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
    }`;

  /**
   * Navigate to login page
   * Closes mobile menu if open
   */
  const handleLogin = () => {
    navigate('/login');
    setIsOpen(false);
  };

  /**
   * Navigate to profile page
   * Closes profile dropdown and mobile menu
   */
  const handleProfile = () => {
    navigate('/profile');
    setShowProfileMenu(false);
    setIsOpen(false);
  };

  /**
   * Handle user logout
   * Clears authentication and redirects to home
   */
  const handleLogout = () => {
    logout();
    navigate('/');
    setShowProfileMenu(false);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-lg border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo and Tagline - Enhanced mobile layout */}
        <div className="flex flex-col">
          <NavLink
            to="/"
            className="flex items-center space-x-2 group "
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-3xl text-orange-600 dark:text-orange-400 group-hover:animate-pulse"
            >
              <FaCode />
            </motion.div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-bounce">
              CVM MERN.
            </span>
          </NavLink>
          <p className="text-xs text-gray-600 dark:text-gray-400 ml-8 hidden sm:block">
            MERN Stack Developer | React Specialist
          </p>
        </div>

        {/* Desktop Menu - Enhanced with better spacing */}
        <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <li>
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={linkClasses}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={linkClasses}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right Section - Enhanced mobile layout */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Social Links - Responsive visibility */}
          <div className="hidden xl:flex items-center space-x-3">
            <motion.a
              href="https://github.com/Cvm0007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/cvm-mern"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:mahtha.s@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={20} />
            </motion.a>
          </div>

          {/* Theme Toggle - Enhanced with animation */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:text-blue-500 dark:hover:text-yellow-400"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              key={isDark ? 'moon' : 'sun'}
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </motion.div>
          </motion.button>

          {/* Auth Section - Enhanced mobile layout */}
          {isAuthenticated ? (
            <div className="relative">
              <motion.button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUser size={18} />
                <span className="hidden sm:block text-sm font-medium">
                  {user?.name || 'Profile'}
                </span>
              </motion.button>

              {/* Profile Dropdown - Enhanced animation */}
              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <button
                      onClick={handleProfile}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FaSignOutAlt className="inline mr-2" />
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.button
              onClick={handleLogin}
              className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUser size={16} />
              <span className="hidden sm:block">Login</span>
            </motion.button>
          )}

          {/* Mobile Menu Button - Enhanced animation */}
          <motion.div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Enhanced animation and layout */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 sm:px-6 pb-6 pt-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-inner border-t border-gray-200 dark:border-gray-700">
              {/* Mobile Navigation Links - Enhanced spacing */}
              <ul className="flex flex-col space-y-2 font-medium text-lg">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/projects', label: 'Projects' },
                  { to: '/blog', label: 'Blogs' },
                  { to: '/contact', label: 'Contact' }
                ].map((item, index) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={toggleMenu}
                      className={linkClasses}
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Social Links - Enhanced layout */}
              <motion.div
                className="flex items-center justify-center space-x-6 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { href: "https://github.com", icon: <FaGithub size={24} /> },
                  { href: "https://linkedin.com", icon: <FaLinkedin size={24} /> },
                  { href: "mailto:contact@shivam.dev", icon: <FaEnvelope size={24} /> }
                ].map((social, index) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>

              {/* Mobile Auth Section - Enhanced layout */}
              <motion.div
                className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <motion.button
                      onClick={handleProfile}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaUser size={18} />
                      <span>Profile</span>
                    </motion.button>
                    <motion.button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaSignOutAlt size={18} />
                      <span>Logout</span>
                    </motion.button>
                  </div>
                ) : (
                  <motion.button
                    onClick={handleLogin}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaUser size={18} />
                    <span>Login</span>
                  </motion.button>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
