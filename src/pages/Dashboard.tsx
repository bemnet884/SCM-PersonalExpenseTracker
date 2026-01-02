
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ExpenseList from '../components/ExpenseList';
import { StorageKeys, Expense, User } from '../types';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    // Load User
    const storedUser = localStorage.getItem(StorageKeys.AUTH_USER);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Load Expenses
    const storedExpenses = localStorage.getItem(StorageKeys.EXPENSES);
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  const totalExpense = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const handleDelete = (id: string) => {
    const updated = expenses.filter(e => e.id !== id);
    setExpenses(updated);
    localStorage.setItem(StorageKeys.EXPENSES, JSON.stringify(updated));
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Navbar user={user} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <header className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Financial Overview</h2>
          <p className="text-gray-500 mt-2">Manage and track your personal spending</p>
        </header>

        {/* Total Summary Card */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 mb-10 shadow-xl shadow-indigo-100 text-white">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <p className="text-indigo-100 text-sm font-medium uppercase tracking-wider mb-1">Total Expenses</p>
              <h3 className="text-5xl font-black">${totalExpense.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
            </div>
            <div className="mt-4 sm:mt-0 bg-white/20 p-4 rounded-xl backdrop-blur-md">
              <p className="text-xs font-bold uppercase mb-1">Records Found</p>
              <p className="text-2xl font-black">{expenses.length}</p>
            </div>
          </div>
        </div>

        {/* Expense History Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Recent Transactions</h3>
            <button 
              onClick={() => window.location.hash = '#/add-expense'}
              className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm flex items-center gap-1"
            >
              Add New
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <ExpenseList expenses={expenses} onDelete={handleDelete} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
