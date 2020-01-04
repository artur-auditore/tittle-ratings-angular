import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarringService } from './service/starring.service'
import { HttpClientModule } from '@angular/common/http';
import { StarringListComponent } from './starring-list/starring-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { StarringDetailComponent } from './starring-detail/starring-detail.component'
import { FormsModule }   from '@angular/forms';
import { StarringsDashboardComponent } from './starrings-dashboard/starrings-dashboard.component';
import { TitlesComponent } from './titles/titles.component';
import { TitleDetailComponent } from './title-detail/title-detail.component';
import { GendersComponent } from './genders/genders.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StarringListComponent,
    LoginComponent,
    StarringDetailComponent,
    StarringsDashboardComponent,
    TitlesComponent,
    TitleDetailComponent,
    GendersComponent,
    ProfilesComponent,
    ProfileDetailComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [StarringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
