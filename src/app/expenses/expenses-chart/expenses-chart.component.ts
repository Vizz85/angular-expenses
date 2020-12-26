import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

import { Expense } from '../expense.model';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expenses-chart',
  templateUrl: './expenses-chart.component.html',
  styleUrls: ['./expenses-chart.component.scss']
})
export class ExpensesChartComponent implements OnInit, OnDestroy {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[];
  public pieChartData: SingleDataSet;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  expenses: Expense[] = [];

  private expensesSub: Subscription;

  constructor(public expensesService: ExpensesService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.expenses = this.expensesService.getExpenses();
    this.expensesSub = this.expensesService.getExpensesUpdateListener()
      .subscribe((expenses: Expense[]) => {
        this.expenses = expenses;
        this.pieChartLabels = [...new Set(expenses.map(expense => expense.category))];

        let chartData = [];
        this.pieChartLabels.forEach(label => {
          let categorySum = 0;
          expenses.forEach(expense => {
            if (expense.category === label) {
              categorySum += Number(expense.cost);
            }
          });
          chartData.push(categorySum);
        });

        this.pieChartData = chartData;
      });

  }

  ngOnDestroy() {
    this.expensesSub.unsubscribe();
  }



}
