import { AuthService, AuthInterceptor, AuthGuard} from './service/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { StarringService } from './service/starring.service'
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { StarringListComponent } from './component/starring-list/starring-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { StarringDetailComponent } from './component/starring-detail/starring-detail.component'
import { FormsModule }   from '@angular/forms';
import { StarringsDashboardComponent } from './component/starrings-dashboard/starrings-dashboard.component';
import { TitlesComponent } from './component/titles/titles.component';
import { TitleDetailComponent } from './component/title-detail/title-detail.component';
import { GendersComponent } from './component/genders/genders.component';
import { ProfilesComponent } from './component/profiles/profiles.component';
import { ProfileDetailComponent } from './component/profile-detail/profile-detail.component';
import { RatingsComponent } from './component/ratings/ratings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ProfileDetailComponent,
    RatingsComponent
    ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  exports: [MatAutocompleteModule],
  providers: [StarringService, AuthService, AuthGuard,
  { provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
