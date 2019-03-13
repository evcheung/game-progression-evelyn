import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './services/games-data.service';

import { gamesReducer } from '../games/store/games.reducer';
import { StoreModule } from '@ngrx/store';
import { GamesComponent } from '../../features/games/components/games/games.component';
import { EffectsModule } from '@ngrx/effects';
import { GamesEffects } from './store/games.effects';
import { GamesCardComponent } from 'src/app/features/games/components/games-card/games-card.component';
import { GamesEditComponent } from '../../features/games/components/games-edit/games-edit.component';
import { GamesRoutingModule } from './games-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GamesComponent, GamesCardComponent, GamesEditComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('games', gamesReducer),
    EffectsModule.forFeature([GamesEffects])
  ],
  exports: [GamesComponent],
  providers: [DataService]
})
export class GamesModule {}
