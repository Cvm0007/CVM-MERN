import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaUser, 
  FaEnvelope, 
  FaCode, 
  FaEdit, 
  FaSave, 
  FaTimes,
  FaProjectDiagram,
  FaBlog,
  FaEnvelopeOpenText
} from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Profile = () => {
  const { user, logout } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user?.name || 'Shivam Narayan',
    email: user?.email || 'shivam@example.com',
    role: user?.role || 'MERN Stack Developer',
    bio: 'Passionate full-stack developer with expertise in React, Node.js, and modern web technologies.'
  });

  const handleSave = () => {
    // In a real app, this would update the user data in the backend
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({
      name: user?.name || 'Shivam Narayan',
      email: user?.email || 'shivam@example.com',
      role: user?.role || 'MERN Stack Developer',
      bio: 'Passionate full-stack developer with expertise in React, Node.js, and modern web technologies.'
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { icon: FaProjectDiagram, label: 'Manage Projects', path: '/projects' },
    { icon: FaBlog, label: 'Manage Blogs', path: '/blog' },
    { icon: FaEnvelopeOpenText, label: 'View Messages', path: '/messages' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <FaUser className="text-3xl text-purple-600" />
                </div>
                <div className="text-white">
                  <h1 className="text-2xl font-bold">{user?.name || 'Shivam Narayan'}</h1>
                  <p className="text-purple-100">{user?.role || 'MERN Stack Developer'}</p>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                {isEditing ? <FaTimes className="text-white" /> : <FaEdit className="text-white" />}
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Profile Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                <FaUser className="mr-2 text-purple-600 dark:text-purple-400" />
                Profile Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedUser.name}
                      onChange={(e) => setEditedUser({...editedUser, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">{editedUser.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedUser.email}
                      onChange={(e) => setEditedUser({...editedUser, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">{editedUser.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Professional Title
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedUser.role}
                      onChange={(e) => setEditedUser({...editedUser, role: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white">{editedUser.role}</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Bio
                </label>
                {isEditing ? (
                  <textarea
                    value={editedUser.bio}
                    onChange={(e) => setEditedUser({...editedUser, bio: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{editedUser.bio}</p>
                )}
              </div>

              {isEditing && (
                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <FaSave />
                    <span>Save Changes</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <FaTimes />
                    <span>Cancel</span>
                  </button>
                </div>
              )}
            </div>

            {/* Management Options */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                <FaCode className="mr-2 text-purple-600 dark:text-purple-400" />
                Management Options
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(item.path)}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-left"
                  >
                    <item.icon className="text-xl text-purple-600 dark:text-purple-400 mb-2" />
                    <h3 className="font-medium text-gray-900 dark:text-white">{item.label}</h3>
                  </button>
                ))}
              </div>
            </div>

            {/* Logout Button */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleLogout}
                className="w-full md:w-auto px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
