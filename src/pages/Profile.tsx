import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { StorageKeys, User } from '../types';
import profile from '../assets/3.jpg';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-indigo-50">
      <Navbar user={user} />

      <main className="max-w-6xl mx-auto px-6 mt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* LEFT – PROFILE CARD */}
          <section className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="h-28 bg-gradient-to-r from-indigo-600 to-purple-600 relative">
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                  <div className="w-28 h-28 rounded-full bg-white p-2 shadow-2xl">
                    <img
                      src={profile}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-16 pb-6 px-6 text-center">
                <h2 className="text-xl font-extrabold text-gray-900">
                  {user.username}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {user.role}
                </p>

                <span className="inline-block mt-4 px-4 py-1.5 text-xs font-semibold rounded-full bg-green-50 text-green-700 border border-green-100">
                  Active Account
                </span>
              </div>
            </div>

            {/* QUICK ACTIONS (VISUAL ONLY) */}
            <div className="mt-6 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b">
                <h3 className="text-sm font-bold text-gray-500 uppercase">
                  Quick Actions
                </h3>
              </div>

              <div className="divide-y">
                <div className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                    ✏️
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Edit Profile</p>
                    <p className="text-sm text-gray-500">Update personal details</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center font-bold">
                    ⚙️
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Settings</p>
                    <p className="text-sm text-gray-500">Preferences & configs</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-6 py-4 hover:bg-red-50 transition">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    🗑️
                  </div>
                  <div>
                    <p className="font-semibold text-red-600">Delete Account</p>
                    <p className="text-sm text-red-400">Permanent removal</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT – DETAILS */}
          <section className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">

              <h3 className="text-xl font-extrabold text-gray-900 mb-6">
                Account Overview
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border">
                  <p className="text-xs font-bold uppercase text-gray-400 mb-2">
                    Account Type
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    Internal User
                  </p>
                  <p className="text-sm text-gray-500">
                    Local Authentication
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border">
                  <p className="text-xs font-bold uppercase text-gray-400 mb-2">
                    Environment
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    Development
                  </p>
                  <p className="text-sm text-gray-500">
                    SCM Instance
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border">
                  <p className="text-xs font-bold uppercase text-gray-400 mb-2">
                    Access Level
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    {user.role === 'Administrator'
                      ? 'Full Read / Write'
                      : 'Limited Access'}
                  </p>
                  <p className="text-sm text-gray-500">
                    Role-based permissions
                  </p>
                </div>
              </div>

              {/* SECURITY SECTION */}
              <div className="mt-10">
                <h4 className="text-sm font-bold uppercase text-gray-500 mb-4">
                  Security
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-gray-50 border hover:shadow-md transition">
                    <p className="font-semibold text-gray-800">
                      Authentication Method
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Username & Password
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border hover:shadow-md transition">
                    <p className="font-semibold text-gray-800">
                      Account Status
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      Verified & Active
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;
