
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { EXPENSE_CATEGORIES, StorageKeys, Expense, User } from '../types';

type FormErrors = {
  amount?: string;
  date?: string;
  description?: string;
};

const AddExpense: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(EXPENSE_CATEGORIES[0]);
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [description, setDescription] = useState('');
  const [touched, setTouched] = useState({ amount: false, date: false, description: false });
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem(StorageKeys.AUTH_USER);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const validate = (next?: { amount?: string; date?: string; description?: string }): FormErrors => {
    const nextAmount = (next?.amount ?? amount).trim();
    const nextDate = (next?.date ?? date).trim();
    const nextDescription = (next?.description ?? description).trim();

    const nextErrors: FormErrors = {};

    const parsedAmount = Number(nextAmount);
    if (!nextAmount) {
      nextErrors.amount = 'Amount is required.';
    } else if (!Number.isFinite(parsedAmount)) {
      nextErrors.amount = 'Amount must be a valid number.';
    } else if (parsedAmount <= 0) {
      nextErrors.amount = 'Amount must be greater than 0.';
    }

    if (!nextDate) {
      nextErrors.date = 'Date is required.';
    } else if (Number.isNaN(new Date(`${nextDate}T00:00:00`).getTime())) {
      nextErrors.date = 'Date must be valid.';
    }

    if (!nextDescription) {
      nextErrors.description = 'Description is required.';
    } else if (nextDescription.length < 2) {
      nextErrors.description = 'Description is too short.';
    } else if (nextDescription.length > 80) {
      nextErrors.description = 'Description is too long (max 80 characters).';
    }

    return nextErrors;
  };

  useEffect(() => {
    setErrors(validate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, date, description]);

  const isFormValid = Object.keys(errors).length === 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    setTouched({ amount: true, date: true, description: true });
    if (Object.keys(nextErrors).length > 0) return;

    const parsedAmount = Number(amount);
    const normalizedDate = new Date(`${date}T00:00:00`).toLocaleDateString();

    const newExpense: Expense = {
      id: Date.now().toString(),
      amount: parsedAmount,
      category,
      description: description.trim(),
      date: normalizedDate
    };

    const storedExpenses = localStorage.getItem(StorageKeys.EXPENSES);
    const expenses = storedExpenses ? JSON.parse(storedExpenses) : [];
    
    const updatedExpenses = [newExpense, ...expenses];
    localStorage.setItem(StorageKeys.EXPENSES, JSON.stringify(updatedExpenses));

    navigate('/dashboard');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Navbar user={user} />
      
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Add New Expense</h2>
            <p className="text-sm text-gray-500">Enter details of your transaction</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6" noValidate>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Amount</label>
              <input
                type="number"
                step="0.01"
                min="0.01"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, amount: true }))}
                placeholder="0.00"
                aria-invalid={touched.amount && !!errors.amount}
                aria-describedby={errors.amount ? 'amount-error' : undefined}
                className={`w-full px-4 py-3 rounded-lg border outline-none transition-all text-xl font-bold focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                  touched.amount && errors.amount ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
              />
              <div className="mt-2 flex items-center justify-between">
                <p className="text-xs text-gray-500">Enter a positive number.</p>
                {touched.amount && errors.amount && (
                  <p id="amount-error" className="text-xs font-semibold text-red-600">
                    {errors.amount}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white transition-all"
                >
                  {EXPENSE_CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, date: true }))}
                  aria-invalid={touched.date && !!errors.date}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-all focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    touched.date && errors.date ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                />
                <div className="mt-2">
                  {touched.date && errors.date && (
                    <p id="date-error" className="text-xs font-semibold text-red-600">
                      {errors.date}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <input
                type="text"
                required
                value={description}
                maxLength={80}
                onChange={(e) => setDescription(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, description: true }))}
                placeholder="What was it for?"
                aria-invalid={touched.description && !!errors.description}
                aria-describedby={errors.description ? 'description-error' : 'description-help'}
                className={`w-full px-4 py-3 rounded-lg border outline-none transition-all focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                  touched.description && errors.description ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
              />
              <div className="mt-2 flex items-center justify-between">
                <p id="description-help" className="text-xs text-gray-500">
                  {description.trim().length}/80
                </p>
                {touched.description && errors.description && (
                  <p id="description-error" className="text-xs font-semibold text-red-600">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`flex-1 py-3 rounded-lg font-bold transition-colors shadow-lg shadow-indigo-100 ${
                  isFormValid
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-indigo-200 text-white cursor-not-allowed'
                }`}
              >
                Save Expense
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddExpense;
