import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarringListComponent } from './starring-list/starring-list.component'
import { RouterModule, Routes } from '@angular/router'
import { StarringsDashboardComponent } from './starrings-dashboard/starrings-dashboard.component'
import { StarringDetailComponent } from './starring-detail/starring-detail.component'
import { TitleDetailComponent } from './title-detail/title-detail.component';
import { TitlesComponent } from './titles/titles.component';

const routes: Routes = [
  { path: '', redirectTo: '/starrings-dashboard', pathMatch: 'full' },
  {path: 'starrings', component: StarringListComponent},
  {path: 'starrings-dashboard', component: StarringsDashboardComponent},
  {path: 'starrings/:pk', component: StarringDetailComponent},
  {path: 'titles', component: TitlesComponent},
  {path: 'titles/:pk', component: TitleDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
