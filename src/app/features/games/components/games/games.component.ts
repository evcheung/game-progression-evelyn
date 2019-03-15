import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetGames } from '../../../../modules/games/store/games.actions';
import { Observable } from 'rxjs';
import { getGamesDataState } from '../../../../modules/games/store/games.selectors';
import { initialState, GamesState } from '../../../../modules/games/store/games.reducer';
import { checkGames } from '../../../../modules/games/services/games-functions';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games$: Observable<any>;
  noGames = false;

  constructor(private store: Store<GamesState>) { }

  ngOnInit() {
    this.store.dispatch(new GetGames());
    this.games$ = this.store.select(getGamesDataState);
    this.store.select(getGamesDataState).subscribe((val: []) => {
      this.noGames = checkGames(val, initialState);
    });

  }

}
