import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { GamesComponent } from './features/games/components/games/games.component';
import { ProfileComponent } from './features/profile/components/profile/profile.component';
import { ProfileEditComponent } from './features/profile/components/profile-edit/profile-edit.component';
import { GamesEditComponent } from './features/games/components/games-edit/games-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'games', component: GamesComponent },
  { path: 'my-profile', component: ProfileComponent},
  { path: 'my-profile/edit', component: ProfileEditComponent},
  { path: 'games/edit/:id', component: GamesEditComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
