import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaArrowLeft, 
  FaCalendar, 
  FaTag,
  FaCode,
  FaRocket,
  FaStar
} from 'react-icons/fa';
import projectsData from '../data/projects.json';
import GoToTop from '../components/GoToTop';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === parseInt(id));
    setProject(foundProject);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h2>
          <button
            onClick={() => navigate('/projects')}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <GoToTop />
      
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 mb-8 transition-colors"
        >
          <FaArrowLeft />
          Back to Projects
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {project.featured && (
              <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <FaStar className="text-yellow-300" />
                Featured Project
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <FaCalendar />
                  {new Date(project.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <FaCode className="text-purple-600 dark:text-purple-400" />
                    Project Overview
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      Modern, responsive design with optimal user experience
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      Scalable architecture following industry best practices
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      Comprehensive testing and quality assurance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      Production-ready with deployment optimization
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 sticky top-24">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Quick Actions
                  </h3>
                  
                  <div className="space-y-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 font-medium"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                    
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gray-800 dark:bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300 font-medium"
                    >
                      <FaGithub />
                      View Code
                    </a>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Project Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <FaTag className="text-purple-600 dark:text-purple-400" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Category: {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-purple-600 dark:text-purple-400" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Completed: {new Date(project.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {project.featured && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg">
                      <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                        <FaStar className="text-yellow-500" />
                        <span className="text-sm font-medium">
                          This is a featured project
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Related Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projectsData
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map(relatedProject => (
                <motion.div
                  key={relatedProject.id}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                  <img 
                    src={relatedProject.image} 
                    alt={relatedProject.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {relatedProject.title}
                    </h3>
                    <Link
                      to={`/project/${relatedProject.id}`}
                      className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
                    >
                      View Project →
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
