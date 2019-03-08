import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ProfileRoutingModule } from './profile-routing.module';

import { DataService } from './services/dashboard-data.service';

import { dashboardReducer } from '../dashboard/store/dashboard.reducer';
import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from '../../features/dashboard/dashboard.component';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/dashboard.effects';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    // ProfileRoutingModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffects])
  ],
  exports: [DashboardComponent],
  providers: [DataService]
})
export class DashboardModule {}
