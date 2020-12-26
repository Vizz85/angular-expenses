import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseAddComponent } from './expenses/expense-add/expense-add.component';
import { HeaderComponent } from './header/header.component';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { ExpensesChartComponent } from './expenses/expenses-chart/expenses-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseAddComponent,
    HeaderComponent,
    ExpensesListComponent,
    ExpensesChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
