
import React from 'react';
import ExpenseItem from './ExpenseItem';
import { Expense } from '../types';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDelete }) => {
  if (expenses.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200 shadow-sm">
        <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900">No expenses found</h3>
        <p className="text-gray-500 mt-1">Get started by adding a new expense.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header Row - Desktop Only */}
      <div className="hidden sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6 sm:py-3 bg-gray-50/50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        <div className="sm:col-span-3">Category</div>
        <div className="sm:col-span-4">Description</div>
        <div className="sm:col-span-3 text-right">Amount</div>
        <div className="sm:col-span-2 text-right">Actions</div>
      </div>
      
      {/* List Items */}
      <div className="divide-y divide-gray-100">
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
