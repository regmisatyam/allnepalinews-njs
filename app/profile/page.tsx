'use client';

import { motion } from 'framer-motion';
import Profile from '../components/Profile';
import { useAuth } from '@/lib/auth';
import LoginButton from '../components/LoginButton';

export default function ProfilePage() {
  const { user, loading } = useAuth();

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Profile
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {user ? 'Manage your account information and preferences.' : 'Sign in to access your profile.'}
        </p>
      </motion.div>

      {!loading && !user && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8 p-8 text-center"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Sign in to continue
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Please sign in with your Google account to view and manage your profile.
          </p>
          <div className="flex justify-center">
            <LoginButton />
          </div>
        </motion.div>
      )}

      <Profile />
    </div>
  );
} 