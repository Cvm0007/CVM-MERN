import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const PrivacyPolicy = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-20 px-4 min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' 
        : 'bg-gradient-to-br from-pink-50 via-orange-50 to-violet-50'
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
          Privacy Policy 🔐
        </motion.h2>

        <motion.div
          className="space-y-8 text-base leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Your privacy matters deeply to us. This Privacy Policy outlines how we handle your personal information when you interact with our website and services.
          </p>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>1. Information We Collect</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              We may collect both personal (e.g., name, email) and non-personal information (e.g., browser type, device, location) through forms, cookies, and analytics tools when you visit or interact with our website.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>2. How We Use Your Data</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              Your information helps us improve website performance, provide personalized experiences, communicate updates, fix bugs, and analyze usage for enhancing our services.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>3. Cookies & Tracking</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              We use cookies and similar tracking technologies to enhance usability and functionality. You can control cookies through your browser settings.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>4. Third-Party Integrations</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              We may use services such as Google Analytics, embedded videos, or external forms that operate under their own privacy policies. We recommend reviewing their terms for better understanding.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>5. Data Security</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              We take appropriate technical and organizational measures to secure your data. However, no system is 100% secure, and we cannot guarantee absolute protection.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>6. Your Rights</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              You have the right to request access, correction, or deletion of your data at any time. For such inquiries, feel free to contact us via information provided on our site.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>7. Policy Updates</h3>
            <p className={isDark ? 'text-gray-300' : ''}>
              We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
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

export default PrivacyPolicy;
