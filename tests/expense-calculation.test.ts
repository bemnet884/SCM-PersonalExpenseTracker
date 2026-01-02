import { describe, it, expect } from "vitest";
import { Expense } from "../src/types";

const makeExpense = (id: string, amount: number, category: any, date: string): Expense => ({
  id,
  amount,
  category,
  description: "Test expense",
  date,
});

describe("expense calculations", () => {
  it("calculates total amount from a list of expenses", () => {
    const expenses: Expense[] = [
      makeExpense("1", 50.5, "Food", "2025-01-01"),
      makeExpense("2", 20, "Transport", "2025-01-02"),
      makeExpense("3", 29.5, "Bills", "2025-01-03"),
    ];

    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    expect(total).toBeCloseTo(100);
  });

  it("returns zero total for empty expense list", () => {
    const expenses: Expense[] = [];

    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    expect(total).toBe(0);
  });

  it("aggregates amounts by category", () => {
    const expenses: Expense[] = [
      makeExpense("1", 10, "Food", "2025-01-01"),
      makeExpense("2", 15, "Food", "2025-01-02"),
      makeExpense("3", 5, "Transport", "2025-01-02"),
    ];

    const byCategory = expenses.reduce(
      (acc, curr) => {
        const existing = acc[curr.category] ?? 0;
        acc[curr.category] = existing + curr.amount;
        return acc;
      },
      {} as Record<string, number>
    );

    expect(byCategory["Food"]).toBe(25);
    expect(byCategory["Transport"]).toBe(5);
    expect(byCategory["Entertainment"]).toBeUndefined();
  });
});

