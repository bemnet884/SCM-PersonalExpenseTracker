import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MOCK_USERS } from '../data/users';
import { StorageKeys, User } from '../types';

const AdminUsers: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem(StorageKeys.AUTH_USER);
    if (!storedUser) {
      navigate('/login', { replace: true });
      return;
    }

    const parsedUser: User = JSON.parse(storedUser);
    setUser(parsedUser);

    if (parsedUser.role !== 'Administrator') {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  if (!user || user.role !== 'Administrator') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Navbar user={user} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <header className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">User Management</h2>
          <p className="text-gray-500 mt-2">View all system users and their roles</p>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {MOCK_USERS.map((u) => (
                <tr key={u.username}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {u.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                        u.role === 'Administrator'
                          ? 'bg-red-50 text-red-700 border border-red-100'
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminUsers;

