import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaCalendar, 
  FaClock, 
  FaTag, 
  FaUser,
  FaNewspaper,
  FaShare,
  FaHeart,
  FaComment
} from 'react-icons/fa';
import blogsData from '../data/blogs.json';
import GoToTop from '../components/GoToTop';
import { style } from 'framer-motion/client';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const foundBlog = blogsData.find(b => b.slug === slug);
    setBlog(foundBlog);
    
    if (foundBlog) {
      const related = blogsData
        .filter(b => b.id !== foundBlog.id && b.tags.some(tag => foundBlog.tags.includes(tag)))
        .slice(0, 3);
      setRelatedBlogs(related);
    }
    
    setLoading(false);
  }, [slug]);

  const shareBlog = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Blog link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Post Not Found
          </h2>
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <GoToTop />
      
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 mb-8 transition-colors"
        >
          <FaArrowLeft />
          Back to Blog
        </motion.button>

        {/* Blog Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {blog.featured && (
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <FaHeart className="text-yellow-300" />
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {blog.title}
              </h1>
            </div>
          </div>

          {/* Blog Meta-Data */}
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <span className="flex items-center gap-2">
                <FaUser className='text-green-400'/>
                {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <FaCalendar className='text-orange-400'/>
                {new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className='text-blue-400'/>
                {blog.readTime}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag, index) => (
                <Link
                  key={index}
                  to={`/blog`}
                  className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-900/50 dark:hover:to-pink-900/50 transition-all"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
                {blog.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Share and Engagement */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={shareBlog}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors hover:text-purple-400 dark:hover:text-purple-400"
                  >
                    <FaShare />
                    Share
                  </button>
                  <button 
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <FaHeart />
                    Like
                  </button>
                  <button 
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <FaComment />
                    Comment
                  </button>
                </div>
                
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {Math.floor(Math.random() * 500) + 100} views
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FaNewspaper className="text-purple-600 dark:text-purple-400" />
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map(relatedBlog => (
                <motion.div
                  key={relatedBlog.id}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                  <img 
                    src={relatedBlog.image} 
                    alt={relatedBlog.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span>{new Date(relatedBlog.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{relatedBlog.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${relatedBlog.slug}`}
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Get the latest articles and insights delivered straight to your inbox. 
            No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors hover:text-orange-600 transition-transform duration-300 hover:rotate-3 hover:scale-105">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetail;
