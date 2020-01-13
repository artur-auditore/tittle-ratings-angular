import { AuthGuard } from './service/auth.service';
import { LoginComponent } from './component/login/login.component';
import { RatingsComponent } from './component/ratings/ratings.component';
import { ProfilesComponent } from './component/profiles/profiles.component';
import { NgModule, Component } from '@angular/core';

import { StarringListComponent } from './component/starring-list/starring-list.component'
import { RouterModule, Routes } from '@angular/router'
import { StarringsDashboardComponent } from './component/starrings-dashboard/starrings-dashboard.component'
import { StarringDetailComponent } from './component/starring-detail/starring-detail.component'
import { TitleDetailComponent } from './component/title-detail/title-detail.component';
import { TitlesComponent } from './component/titles/titles.component';
import { GendersComponent } from './component/genders/genders.component';
import { ProfileDetailComponent } from './component/profile-detail/profile-detail.component';

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
