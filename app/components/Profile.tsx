'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth';
import { logOut } from '@/lib/firebase';
import Image from 'next/image';

export default function Profile() {
  const { user, loading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await logOut();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500 dark:text-gray-400">Please sign in to view your profile</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8">
      <div className="md:flex">
        <div className="p-8 w-full">
          <div className="flex flex-col items-center text-center mb-6">
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                alt="Profile"
                width={96}
                height={96}
                className="h-24 w-24 rounded-full border-4 border-blue-100 dark:border-blue-900"
              />
            ) : (
              <div className="h-24 w-24 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-500">
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
              {user.displayName || 'User'}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Account Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                <p className="mt-1 text-sm text-gray-900 dark:text-white">{user.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Account Created</p>
                <p className="mt-1 text-sm text-gray-900 dark:text-white">
                  {user.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Sign In</p>
                <p className="mt-1 text-sm text-gray-900 dark:text-white">
                  {user.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <motion.button
              onClick={handleSignOut}
              disabled={isLoading}
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing Out...
                </>
              ) : (
                'Sign Out'
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
} 