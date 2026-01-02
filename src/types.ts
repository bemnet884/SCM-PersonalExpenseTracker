
export interface User {
  username: string;
  role: string;
  password?: string;
}

export interface Expense {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
}

export enum StorageKeys {
  AUTH_USER = 'auth_user',
  EXPENSES = 'user_expenses'
}
