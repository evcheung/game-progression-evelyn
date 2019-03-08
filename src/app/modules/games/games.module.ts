import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ProfileRoutingModule } from './profile-routing.module';

import { DataService } from './services/games-data.service';

import { gamesReducer } from '../games/store/games.reducer';
import { StoreModule } from '@ngrx/store';
import { GamesComponent } from '../../../app/features/games/games.component';
import { EffectsModule } from '@ngrx/effects';
import { GamesEffects } from './store/games.effects';
import { GamesCardComponent } from 'src/app/features/games/games-card/games-card.component';

@NgModule({
  declarations: [GamesComponent, GamesCardComponent],
  imports: [
    CommonModule,
    // ProfileRoutingModule,
    StoreModule.forFeature('games', gamesReducer),
    EffectsModule.forFeature([GamesEffects])
  ],
  exports: [GamesComponent],
  providers: [DataService]
})
export class GamesModule {}
