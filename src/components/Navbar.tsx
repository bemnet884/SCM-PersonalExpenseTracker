
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StorageKeys, User } from '../types';

interface NavbarProps {
  user: User;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem(StorageKeys.AUTH_USER);
    navigate('/login');
  };

  return (
    <nav className="bg-white/60 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Left: Logo */}
          <div className="flex items-center gap-6">
            <Link to="/dashboard" className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 0 0 2 2h14" />
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 7a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V7z" />
              </svg>
              <span className="text-xl font-bold text-indigo-600">AuthDash</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition">
                Dashboard
              </Link>
              <Link to="/add-expense" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition">
                Add Expense
              </Link>
              <Link to="/profile" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition">
                Profile
              </Link>
            </div>
          </div>

          {/* Right: user / actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <span className="text-sm text-gray-500">Welcome, <span className="font-semibold text-gray-700">{user.username}</span></span>
              <button onClick={handleLogout} className="px-3 py-2 rounded-md text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 transition">Logout</button>
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold uppercase">{user.username.split(' ').map(s => s.charAt(0)).slice(0,2).join('').toUpperCase()}</div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen((s) => !s)}
                aria-label="Toggle menu"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 pt-3 pb-4 space-y-1">
            <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50">Dashboard</Link>
            <Link to="/add-expense" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50">Add Expense</Link>
            <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50">Profile</Link>
            <div className="mt-2 border-t border-gray-100 pt-2">
              <button onClick={handleLogout} className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 bg-red-50 hover:bg-red-100">Logout</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
