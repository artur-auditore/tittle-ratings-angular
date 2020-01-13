import { AuthGuard } from './service/auth.service';
import { LoginComponent } from './login/login.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarringListComponent } from './starring-list/starring-list.component'
import { RouterModule, Routes } from '@angular/router'
import { StarringsDashboardComponent } from './starrings-dashboard/starrings-dashboard.component'
import { StarringDetailComponent } from './starring-detail/starring-detail.component'
import { TitleDetailComponent } from './title-detail/title-detail.component';
import { TitlesComponent } from './titles/titles.component';
import { GendersComponent } from './genders/genders.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'starrings', component: StarringListComponent},
  {path: 'starrings-dashboard', component: StarringsDashboardComponent, canActivate: [AuthGuard]},
  {path: 'starrings/:pk', component: StarringDetailComponent, canActivate: [AuthGuard]},
  {path: 'titles', component: TitlesComponent, canActivate: [AuthGuard]},
  {path: 'titles/:pk', component: TitleDetailComponent, canActivate: [AuthGuard]},
  {path: 'genders', component: GendersComponent, canActivate: [AuthGuard]},
  {path: 'profiles', component: ProfilesComponent, canActivate: [AuthGuard]},
  {path: 'profiles/:pk', component: ProfileDetailComponent, canActivate: [AuthGuard]},
  {path: 'ratings', component: RatingsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
