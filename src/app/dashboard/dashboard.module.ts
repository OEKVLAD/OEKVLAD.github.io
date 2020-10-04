import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { TaskManagerOraComponent } from '../task-manager-ora/task-manager-ora.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TaskManagerOraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
