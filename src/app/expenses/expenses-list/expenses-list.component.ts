import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { Expense } from '../expense.model';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['item', 'cost'];
  expenses: Expense[] = [];
  dataSource: MatTableDataSource<Expense>;

  private expensesSub: Subscription;

  /** Gets the total cost of all expenses. */
  getTotalCost() {
    return this.expenses.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  constructor(public expensesService: ExpensesService) { }

  ngOnInit(): void {
    this.expenses = this.expensesService.getExpenses();
    this.expensesSub = this.expensesService.getExpensesUpdateListener()
      .subscribe((expenses: Expense[]) => {
        this.expenses = expenses;
        this.dataSource = new MatTableDataSource<Expense>(this.expenses);
      });

  }

  ngOnDestroy() {
    this.expensesSub.unsubscribe();
  }

}
