import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.scss']
})
export class ExpenseAddComponent implements OnInit {
  @ViewChild('descriptionRef') descriptionRef: ElementRef;

  constructor(public expensesService: ExpensesService) { }

  ngOnInit(): void {
  }

  onAddExpense(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.expensesService.addExpense(form.value.description, form.value.category, Number(form.value.cost));
    this.descriptionRef.nativeElement.focus()
    form.resetForm();
  }

}
