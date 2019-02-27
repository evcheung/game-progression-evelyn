import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../../../app/features/profile/components/profile/profile.component';
import { ProfileEditComponent } from '../../../app/features/profile/components/profile-edit/profile-edit.component';

const routes: Routes = [
  // { path: '', component: ProfileComponent},
  // { path: 'my-profile/edit', component: ProfileEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
