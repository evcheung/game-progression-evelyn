import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetGames, GetPlatforms, UpdateGame } from '../../../../modules/games/store/games.actions';
import { getGamesDataState, getPlatformsDataState } from '../../../../modules/games/store/games.selectors';
import { GamesState } from '../../../../modules/games/store/games.reducer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { aboveZeroValidator } from 'src/app/modules/games/services/games-validators.directive';
import { aboveEqualZeroValidator } from '../../../../modules/games/services/games-validators.directive';
import { GamesResponse } from '../../../../interface/dashboard-data.interface';
import { PlatformsResponse } from '../../../../interface/platform-data.interface';
import { ModifiedGamesResponse } from '../../../../interface/games-data.interface';
import { getGame, modifyGame } from '../../../../modules/games/services/games-functions';


@Component({
  selector: 'app-games-edit',
  templateUrl: './games-edit.component.html',
  styleUrls: ['./games-edit.component.scss']
})
export class GamesEditComponent implements OnInit {
  games$: Observable<any>;
  games: [];
  selectedGame: ModifiedGamesResponse;
  gameForm: FormGroup;
  platforms: [];

  onSubmit() {
    if (this.gameForm.valid) {
      const newGameObject = modifyGame(this.gameForm, this.selectedGame, this.platforms);
      this.store.dispatch(new UpdateGame(newGameObject));
    } else {
      alert('Invalid form');
    }
  }

  constructor(private store: Store<GamesState>, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.games$ = this.store.select(getGamesDataState);
    this.games$.subscribe((val: []) => {
      this.games = val;
    });

    this.selectedGame = getGame(this.games, +this.route.snapshot.paramMap.get('id'));

    this.store.dispatch(new GetPlatforms());
    this.store.select(getPlatformsDataState).subscribe(val => this.platforms = val)

    // ASK: is this good architecture? Getting platforms here?

    this.gameForm = new FormGroup({
      name: new FormControl(this.selectedGame.name, Validators.required),
      image: new FormControl(this.selectedGame.image, Validators.required),
      platform: new FormControl(this.selectedGame.platform, Validators.required),
      numberOfHoursToComplete: new FormControl(this.selectedGame.numberOfHoursToComplete, [Validators.required, aboveZeroValidator()]),
      priority: new FormControl(this.selectedGame.priority, Validators.required),
      numberOfHoursPlayed: new FormControl(this.selectedGame.numberOfHoursPlayed, [Validators.required, aboveEqualZeroValidator()]),
      isComplete: new FormControl(this.selectedGame.isComplete),
    });
  }

}
