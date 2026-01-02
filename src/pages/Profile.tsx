
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { StorageKeys, User } from '../types';

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(StorageKeys.AUTH_USER);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Navbar user={user} />
      
      <main className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-indigo-600 h-32 relative">
             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                <div className="w-24 h-24 bg-white rounded-full p-2 shadow-lg">
                  <div className="w-full h-full bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-3xl uppercase">
                    {user.username.charAt(0)}
                  </div>
                </div>
             </div>
          </div>
          
          <div className="pt-16 pb-10 px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{user.username}</h2>
            <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-sm font-semibold rounded-full border border-green-100 mb-8">
              {user.role}
            </span>

            <div className="grid grid-cols-1 gap-4 text-left max-w-xs mx-auto">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-400 font-bold uppercase mb-1">Account Type</p>
                <p className="text-gray-700 font-medium">Internal User (Local Auth)</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-400 font-bold uppercase mb-1">SCM Status</p>
                <p className="text-gray-700 font-medium">Development Instance</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-400 font-bold uppercase mb-1">Access Level</p>
                <p className="text-gray-700 font-medium">{user.role === 'Administrator' ? 'Full Read/Write' : 'Limited Access'}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
