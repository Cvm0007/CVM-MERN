import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const TermsAndConditions = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-20 px-4 min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
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
          Terms & Conditions 📄
        </motion.h2>

        <motion.div
          className="space-y-8 text-base leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            By accessing and using this website, you agree to comply with the terms outlined below. Please read them carefully.
          </p>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>1. Use of Website</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              You agree to use this website only for lawful purposes and in a manner that does not infringe on the rights of others or restrict their use.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>2. Intellectual Property</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              All content, including text, graphics, logos, and code, is the intellectual property of the site owner and may not be reproduced without permission.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>3. External Links</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              We may link to external websites. We are not responsible for their content or policies and encourage you to review their terms.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>4. Limitation of Liability</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              We are not liable for any damages arising from the use or inability to use this site, including indirect or consequential losses.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>5. Changes to Terms</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              We reserve the right to update or change these terms at any time. Continued use of the website constitutes acceptance of those changes.
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

export default TermsAndConditions;
