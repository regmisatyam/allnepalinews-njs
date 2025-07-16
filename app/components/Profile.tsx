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
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">API Key</p>
                {/* Make the API key a button that copies to clipboard */}
                <button className="mt-1 text-sm text-gray-900 dark:text-white flex items-center" onClick={() => {
                  navigator.clipboard.writeText(user.uid);
                  alert('API Key copied to clipboard');
                }}>
                  {user.uid} &nbsp; <div className="text-gray-500 dark:text-gray-400 w-3 h-3" title="Copy to clipboard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M384 112v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h80c0-35.3 28.7-64 64-64s64 28.7 64 64h80c26.5 0 48 21.5 48 48zM192 40c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24m96 114v-20a6 6 0 0 0 -6-6H102a6 6 0 0 0 -6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z"/></svg></div>
                </button> 
                
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