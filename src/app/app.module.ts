import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarringService } from './starring-list/starring.service'
import { HttpClientModule } from '@angular/common/http';
import { StarringListComponent } from './starring-list/starring-list.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    StarringListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [StarringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
