import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.scss']
})
export class ExpenseAddComponent implements OnInit {
  enteredDescription: string = '';
  enteredAmount: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddExpense() {
    console.log('new expense');
  }

}
