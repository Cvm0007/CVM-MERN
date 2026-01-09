import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GoToTop from "../components/GoToTop";
import WhatsAppChat from "../components/WhatsAppChat";



const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 pt-16 pb-8 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Brand + Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to="/"
            className="flex items-center space-x-2 group mb-4"
          >
            <FaCode className="text-2xl text-purple-600 dark:text-purple-400 group-hover:animate-pulse" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              CVM MERN.
            </span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            MERN Stack Developer | React Specialist
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Creating meaningful digital experiences with passion and precision.<br/>
            <span className="text-sm bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">" One Soulful line of <b>Code</b> at a Time "</span>
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">Go To Page</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Home</Link></li>
            <li><Link to="/projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Projects</Link></li>
            <li><Link to="/blog" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Contacts</Link></li>
          </ul>
        </motion.div>

        {/* Useful Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">Useful Links</h4>
          <ul className="space-y-2">
            <li><a href="/disclaimer" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Disclaimer</a></li>
            <li><a href="/privacy-policy" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Terms & Conditions</a></li>
          </ul>
        </motion.div>

        {/* Contact + Social + Follow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">Contact</h4>
          <p>
            Email: <a href="mailto:mahtha.s@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">mahtha.s@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+919876543210" className="text-purple-600 dark:text-purple-400 hover:underline">+91 8092604468</a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 justify-center md:justify-start text-2xl mt-4">
            <a
              href="https://github.com/"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shivam-narayan-mern"
              className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:mahtha.s@gmail.com"
              className="text-red-500 hover:text-red-700 transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Follow for more tagline */}
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            Follow for more updates❤️
          </p>
        </motion.div>
      </div>

      {/* Bottom Tagline */}
      <motion.div
        className="text-center mt-12 text-xs text-gray-600 dark:text-gray-400 border-t pt-6 border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} MyPortfolio • Designed & Developed by{" "}
        <span className="text-purple-600 dark:text-purple-400 font-semibold">CVM</span> <br/>
        <span className=""> Made with ❤️ in India 🇮🇳 </span>

        <WhatsAppChat />
        <GoToTop />
        
      </motion.div>

  
    </motion.footer>
  );
};

export default Footer;
