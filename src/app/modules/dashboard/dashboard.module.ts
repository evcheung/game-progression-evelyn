import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ProfileRoutingModule } from './profile-routing.module';

import { DataService } from './services/dashboard-data.service';

import { profileReducer } from '../profile/store/profile.reducer';
import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from '../../features/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule
    // ProfileRoutingModule,
    // StoreModule.forFeature('profile', profileReducer),
  ],
  exports: [DashboardComponent],
  providers: [DataService]
})
export class DashboardModule {}
