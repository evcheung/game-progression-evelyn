import { NgModule } from '@angular/core';

import { ProfileComponent } from '../../../app/features/profile/components/profile/profile.component';
import { ProfileEditComponent } from '../../../app/features/profile/components/profile-edit/profile-edit.component';
import { CommonModule } from '@angular/common';
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
    // TODO: move directive to profile-edit feature component
    // Also move the files since it is not being used elsewhere
    HoursValidatorDirective,
  ],
  imports: [
    // move these two modules as well once directive moved out
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    // TODO: how does this work even though routing file is empty?
    StoreModule.forFeature('profile', profileReducer),
  ],
  exports: [
    ProfileComponent,
    ProfileEditComponent
  ],
  providers: [DataService],
})
export class ProfileModule { }
