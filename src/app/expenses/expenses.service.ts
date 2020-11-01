import { Injectable } from '@angular/core';
import { Expense } from './expense.model';

@Injectable({ providedIn: 'root' })
export class ExpensesService {
  private expenses: Expense[] = [];

  getExpenses() {
    return [...this.expenses]
  }

  addExpense(description: string, cost: number) {
    const expense: Expense = { description, cost };
    this.expenses.push(expense);
  }
}