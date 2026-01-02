
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_USERS } from '../data/users';
import { StorageKeys } from '../types';
import illustration from '../assets/1.jpg';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // If already logged in, redirect to dashboard
    const storedUser = localStorage.getItem(StorageKeys.AUTH_USER);
    if (storedUser) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const user = MOCK_USERS.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Save authenticated user (excluding password)
      const { password, ...safeUser } = user;
      localStorage.setItem(StorageKeys.AUTH_USER, JSON.stringify(safeUser));
      navigate('/dashboard');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4 py-12">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left: Illustration (hidden on small screens) */}
        <div className="hidden md:flex md:w-1/2 bg-indigo-50 items-center justify-center p-8">
          <img src={illustration} alt="Finance illustration" className="w-full h-auto max-w-sm object-contain" />
        </div>

        {/* Right: Auth form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center md:text-left mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AuthDash</h1>
            <p className="text-gray-500">Log in to track your expenses</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                placeholder="e.g. admin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center md:text-left">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Mock Credentials for SCM Demo
            </p>
            <div className="mt-2 text-xs text-gray-500 flex flex-col md:flex-row gap-2 md:gap-4">
              <span>U: admin / P: password123</span>
              <span>U: john_doe / P: user456</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
