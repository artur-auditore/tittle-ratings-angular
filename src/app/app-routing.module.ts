import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarringListComponent } from './starring-list/starring-list.component'
import { RouterModule, Routes } from '@angular/router'

const routes = [
  {path: 'starring-list', component: StarringListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
