import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pages', component: ContentComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
