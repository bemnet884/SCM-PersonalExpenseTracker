import React from "react";
import { Expense } from "../types";

interface ExpenseItemProps {
  expense: Expense;
  onDelete: (id: string) => void;
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    food: "bg-orange-50 text-orange-700 ring-1 ring-orange-600/20",
    transport: "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20",
    utilities: "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20",
    entertainment: "bg-purple-50 text-purple-700 ring-1 ring-purple-600/20",
    shopping: "bg-pink-50 text-pink-700 ring-1 ring-pink-600/20",
    health: "bg-green-50 text-green-700 ring-1 ring-green-600/20",
    others: "bg-gray-50 text-gray-700 ring-1 ring-gray-600/20",
  };
  return colors[category.toLowerCase()] || colors.others;
};

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, onDelete }) => {
  return (
    <div className="group bg-white p-4 sm:p-0 hover:bg-gray-50/80 transition-colors sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center">
      {/* Category (Mobile & Desktop) */}
      <div className="flex justify-between items-start sm:items-center sm:col-span-3 sm:px-6 sm:py-4">
        <span
          className={`px-2.5 py-1 rounded-md text-xs font-medium uppercase tracking-wide ${getCategoryColor(
            expense.category
          )}`}
        >
          {expense.category}
        </span>
        <div className="text-xs text-gray-400 sm:hidden font-medium">
          {expense.date}
        </div>
      </div>

      {/* Description (Desktop col 4-7) */}
      <div className="mt-3 sm:mt-0 sm:col-span-4 sm:px-6 sm:py-4">
        <p
          className="text-sm font-medium text-gray-900 truncate"
          title={expense.description}
        >
          {expense.description}
        </p>
        <p className="text-xs text-gray-500 hidden sm:block mt-0.5">
          {expense.date}
        </p>
      </div>

      {/* Amount (Desktop col 8-10) */}
      <div className="mt-2 sm:mt-0 sm:col-span-3 sm:px-6 sm:py-4 sm:text-right flex items-center justify-between sm:block">
        <span className="text-xs text-gray-500 sm:hidden">Amount</span>
        <span className="text-sm font-bold text-gray-900 font-mono">
          ${expense.amount.toFixed(2)}
        </span>
      </div>

      {/* Actions (Desktop col 11-12) */}
      <div className="mt-4 sm:mt-0 flex justify-end sm:col-span-2 sm:px-6 sm:py-4">
        <button
          onClick={() => onDelete(expense.id)}
          className="text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all p-2 rounded-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          aria-label="Delete expense"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
