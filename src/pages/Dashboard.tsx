import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ExpenseList from "../components/ExpenseList";
import ExpenseChart from "../components/ExpenseChart";
import DailyExpenseChart from "../components/DailyExpenseChart";
import { StorageKeys, Expense, User } from "../types";

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
  const averageExpense =
    expenses.length > 0 ? totalExpense / expenses.length : 0;

  const handleDelete = (id: string) => {
    const updated = expenses.filter((e) => e.id !== id);
    setExpenses(updated);
    localStorage.setItem(StorageKeys.EXPENSES, JSON.stringify(updated));
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50/50 pb-12 font-sans text-gray-900">
      <Navbar user={user} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Header */}
        <header className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <p className="text-gray-500 mt-1">Welcome back, {user.username}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => (window.location.hash = "#/add-expense")}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add Expense
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Balance Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                Total Expenses
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">
                $
                {totalExpense.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </h3>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <span className="text-indigo-600 font-medium flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                Tracked
              </span>
              <span className="mx-2">•</span>
              <span>All time</span>
            </div>
          </div>

          {/* Count Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                Transactions
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">
                {expenses.length}
              </h3>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <span className="text-orange-600 font-medium flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Records
              </span>
            </div>
          </div>

          {/* Average Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                Average
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">
                $
                {averageExpense.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </h3>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <span className="text-green-600 font-medium flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2"
                  />
                </svg>
                Per transaction
              </span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Expense Distribution
            </h3>
            <ExpenseChart expenses={expenses} />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Daily Trend
            </h3>
            <DailyExpenseChart expenses={expenses} />
          </div>
        </div>

        {/* Expense History Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">
              Recent Transactions
            </h3>
            {/* Optional: Filter controls could go here */}
          </div>
          <ExpenseList expenses={expenses} onDelete={handleDelete} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
