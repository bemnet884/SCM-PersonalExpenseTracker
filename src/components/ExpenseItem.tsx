
import React from 'react';
import { Expense } from '../types';

interface ExpenseItemProps {
  expense: Expense;
  onDelete: (id: string) => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex justify-between items-center group">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase">
            {expense.category}
          </span>
          <span className="text-xs text-gray-400">{expense.date}</span>
        </div>
        <h4 className="font-semibold text-gray-800">{expense.description}</h4>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-lg font-bold text-gray-900">${expense.amount.toFixed(2)}</span>
        <button 
          onClick={() => onDelete(expense.id)}
          className="text-gray-400 hover:text-red-500 transition-colors p-2"
          aria-label="Delete expense"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
