import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Expense } from '../expense.model';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {
  displayedColumns: string[] = ['item', 'cost'];
  @Input() expenses: Expense[] = [];
  dataSource = new MatTableDataSource<Expense>(this.expenses);

  /** Gets the total cost of all expenses. */
  getTotalCost() {
    return this.expenses.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  constructor(public expensesService: ExpensesService) { }

  ngOnInit(): void {
  }

}
