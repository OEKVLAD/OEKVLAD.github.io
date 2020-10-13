import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { PageCreatorComponent } from './page-creator/page-creator.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: ':url/pageCreator', component: PageCreatorComponent },
  { path: ':url', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
