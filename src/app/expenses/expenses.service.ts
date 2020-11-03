import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Expense } from './expense.model';

@Injectable({ providedIn: 'root' })
export class ExpensesService {
  private expenses: Expense[] = [];
  private expensesUpdated = new Subject<Expense[]>();

  getExpenses() {
    return [...this.expenses]
  }

  getExpensesUpdateListener() {
    return this.expensesUpdated.asObservable();
  }

  addExpense(description: string, cost: number) {
    const expense: Expense = { description, cost };
    this.expenses.push(expense);
    this.expensesUpdated.next([...this.expenses]);
  }
}
