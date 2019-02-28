import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../../app/features/profile/components/profile/profile.component';
import { ProfileEditComponent } from '../../../app/features/profile/components/profile-edit/profile-edit.component';
import { FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';

import { DataService } from './services/profile-data.service';
import { HoursValidatorDirective } from './services/hours-validator.directive';

import { profileReducer } from '../../../app/modules/profile/store/profile.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
    HoursValidatorDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    StoreModule.forFeature('profile', profileReducer),
  ],
  exports: [
    ProfileComponent,
    ProfileEditComponent
  ],
  providers: [DataService],
})
export class ProfileModule { }
