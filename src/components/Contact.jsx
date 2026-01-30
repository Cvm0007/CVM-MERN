import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaProjectDiagram } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

/**
 * Contact Section Component
 * Features:
 * - Fully responsive layout for all screen sizes
 * - Interactive contact form with validation
 * - Contact information cards with icons
 * - Social media links
 * - Dark/Light theme support
 * - Professional animations and micro-interactions
 * - Mobile-optimized form inputs
 */
const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    setIsSubmitting(true);
    // Form will be submitted to FormSubmit.co
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };
  
  // Contact information data
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'cvm.mern@gmail.com',
      href: 'mailto:cvm.mern@gmail.com',
      color: 'blue'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 80926 XXXXX',
      href: 'tel:+918092604468',
      color: 'green'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Gurugram, HR (122001) - India',
      href: '#',
      color: 'red'
    }
  ];
  
  // Social media links
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/Cvm007',
      label: 'GitHub',
      color: 'gray'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/cvm-mern',
      label: 'LinkedIn',
      color: 'blue'
    },
    {
      icon: FaProjectDiagram,
      href: 'https://cvm-mernn.netlify.app',
      label: 'Portfolio',
      color: 'sky'
    }
  ];
  
  return (
    <section
      id="contact"
      className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' 
          : 'bg-gradient-to-br from-orange-50 via-pink-50 to-violet-50'
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
            Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-pink-500 to-violet-400">Connect</span>
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className={`group flex items-center gap-4 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:animate-pulse ${
                    isDark 
                      ? 'bg-gray-800/60 backdrop-blur-none sm:backdrop-blur-sm border border-gray-700 hover:border-purple-600' 
                      : 'bg-white border border-gray-200 hover:border-orange-300'
                  }`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white ${
                      info.color === 'blue' ? 'bg-blue-500' :
                      info.color === 'green' ? 'bg-green-500' :
                      info.color === 'red' ? 'bg-red-500' : 'bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.1 }}
                  >
                    <info.icon size={20} />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className={`text-sm sm:text-base font-semibold mb-1 ${
                      isDark ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                      {info.label}
                    </h4>
                    <p className={`text-base sm:text-lg font-medium ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      {info.value}
                    </p>
                  </div>
                  <motion.div
                    className={`text-2xl hover:text-orange-400 ${
                      isDark ? 'text-gray-400' : 'text-gray-400'
                    }`}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.1 }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
                className={`p-6 sm:p-8 rounded-xl ${
                isDark 
                  ? 'bg-gray-800/60 backdrop-blur-none sm:backdrop-blur-sm border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className={`text-lg sm:text-xl font-bold mb-6 ${
                isDark ? 'text-purple-400' : 'text-purple-600'
              }`}>
                Connect on Social Media
              </h3>
              <div className="flex gap-4 sm:gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-colors ${
                      isDark 
                        ? 'bg-gray-700/50 text-gray-400 hover:text-orange-400' 
                        : 'bg-gray-100/50 text-gray-600 hover:text-orange-600'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Response Time Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className={`p-4 sm:p-6 rounded-xl ${
                isDark 
                  ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-700' 
                  : 'bg-gradient-to-r from-orange-100 to-pink-100 border border-orange-300'
              }`}
            >
              <h4 className={`text-base sm:text-lg font-bold mb-2 ${
                isDark ? 'text-orange-400' : 'text-orange-600'
              }`}>
                Response Time
              </h4>
              <p className={`text-sm sm:text-base ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I typically respond within 24-48 hours. For urgent matters, please mention it in your message.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/mahtha.s@gmail.com"
              method="POST"
              className={`p-6 sm:p-8 rounded-2xl shadow-lg backdrop-blur-none sm:backdrop-blur-lg border ${
                isDark 
                  ? 'bg-gray-800/60 border-gray-700' 
                  : 'bg-white bg-opacity-90 border-orange-200'
              }`}
              whileHover={{ shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Anti-spam setup */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Form Message from Portfolio" />
              <input type="hidden" name="_template" value="table" />

              {/* Form Header */}
              <div className="mb-6">
                <h3 className={`text-xl sm:text-2xl font-bold ${
                  isDark ? 'text-orange-400' : 'text-orange-600'
                }`}>
                  Send Me a Message
                </h3>
                <p className={`text-sm sm:text-base mt-2 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Fill out the form below and I'll get back to you soon.
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-4 sm:space-y-6">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Shivam N"
                    required
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-4 py-3 sm:py-4 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-base sm:text-lg ${
                      isDark 
                        ? 'bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500' 
                        : 'bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-orange-400 focus:border-orange-400'
                    }`}
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="mern@example.com"
                    required
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-4 py-3 sm:py-4 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-base sm:text-lg ${
                      isDark 
                        ? 'bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500' 
                        : 'bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-orange-400 focus:border-orange-400'
                    }`}
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hi..."
                    rows={6}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-4 py-3 sm:py-4 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none text-base sm:text-lg ${
                      isDark 
                        ? 'bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500' 
                        : 'bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-orange-400 focus:border-orange-400'
                    }`}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:animate-pulse"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2, rotate: isSubmitting ? 0 : 2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                      >
                      <FaArrowRight />
                      </motion.div>
                    </span>
                  )}
                </motion.button>
              </div>

              {/* Form Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className={`mt-6 text-center text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                <p>I'll never share your information with anyone else without your consent.</p>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
