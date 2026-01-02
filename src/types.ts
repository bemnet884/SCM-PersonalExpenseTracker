export interface User {
  username: string;
  role: UserRole;
  password?: string;
}

export const USER_ROLES = ['Administrator', 'Standard User', 'Release Manager'] as const;
export type UserRole = (typeof USER_ROLES)[number];

export const EXPENSE_CATEGORIES = ['Food', 'Transport', 'Entertainment', 'Shopping', 'Bills', 'Other'] as const;
export type ExpenseCategory = (typeof EXPENSE_CATEGORIES)[number];

export interface Expense {
  id: string;
  amount: number;
  category: ExpenseCategory;
  description: string;
  date: string;
}

export enum StorageKeys {
  AUTH_USER = "auth_user",
  EXPENSES = "user_expenses",
}
