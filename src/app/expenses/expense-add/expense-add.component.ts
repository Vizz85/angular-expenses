import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Expense } from '../expense.model';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.scss']
})
export class ExpenseAddComponent implements OnInit {
  enteredDescription: string = '';
  enteredAmount: string = '';
  @Output() expenseCreated = new EventEmitter<Expense>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddExpense(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const newExpense: Expense = {
      description: form.value.description,
      cost: Number(form.value.amount)
    };
    this.expenseCreated.emit(newExpense);
  }

}
