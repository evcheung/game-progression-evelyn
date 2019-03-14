import { NgModule } from '@angular/core';

import { ProfileComponent } from '../../../app/features/profile/components/profile/profile.component';
import { ProfileEditComponent } from '../../../app/features/profile/components/profile-edit/profile-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';

import { DataService } from './services/profile-data.service';
import { HoursValidatorDirective } from '../../features/profile/directives/hours-validator.directive';

import { profileReducer } from '../../../app/modules/profile/store/profile.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile.effects';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
    // TODO: move directive to profile-edit feature component
    HoursValidatorDirective,
  ],
  imports: [
    // move these two modules as well once directive moved out
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    EffectsModule.forFeature([ProfileEffects]),
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
