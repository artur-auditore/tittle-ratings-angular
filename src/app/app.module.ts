import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarringService } from './starring.service'
import { HttpClientModule } from '@angular/common/http';
import { StarringListComponent } from './starring-list/starring-list.component'

@NgModule({
  declarations: [
    AppComponent,
    StarringListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [StarringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
