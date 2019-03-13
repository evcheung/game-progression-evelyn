import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetGames } from '../../../../modules/games/store/games.actions';
import { Observable } from 'rxjs';
import { getGamesDataState } from '../../../../modules/games/store/games.selectors';
import { initialState, GamesState } from '../../../../modules/games/store/games.reducer';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games$: Observable<any>;

  gamesState;
  noGames = false;

  constructor(private store: Store<GamesState>) { }

  ngOnInit() {
    this.store.dispatch(new GetGames());
    this.games$ = this.store.select(getGamesDataState);
    this.store.select(getGamesDataState).subscribe(val =>{
      if (val === initialState.data || val.length === 0) {
        this.noGames = true;
      } else {
        this.noGames = false;
      }
      // console.log(this.noGames)
    });

  }

}
