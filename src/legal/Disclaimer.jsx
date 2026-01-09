import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Disclaimer = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-20 px-4 min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' 
        : 'bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50'
      }`}>
      <div className={`max-w-4xl mx-auto ${
        isDark ? 'text-gray-100' : 'text-gray-800'
      }`}>
        <motion.h2
          className={`text-4xl font-extrabold mb-10 text-center ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Disclaimer 
        </motion.h2>

        <motion.div
          className="space-y-8 text-base leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            The information provided on this website is for general informational purposes only. All content is shared in good faith, but we make no warranties about completeness, accuracy, or reliability.
          </p>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>1. Professional Advice</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              Nothing on this website constitutes professional advice. For personalized support, always consult a qualified expert.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>2. External Resources</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              We may refer to or link to third-party resources. We are not responsible for the accuracy or practices of external websites.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>3. Limitation of Liability</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              We will not be liable for any loss or damage in connection with the use of this website or reliance on any information provided.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>4. Updates</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              This disclaimer may be revised at any time. Please check periodically for updates.
            </p>
          </div>

          <p className={`text-sm italic ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Last updated: July 31, 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Disclaimer;
