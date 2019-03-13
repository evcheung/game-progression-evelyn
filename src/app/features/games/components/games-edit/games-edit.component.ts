import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetGames, GetPlatforms } from '../../../../modules/games/store/games.actions';
import { getGamesDataState, getPlatformsDataState } from '../../../../modules/games/store/games.selectors';
import { GamesState } from '../../../../modules/games/store/games.reducer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { aboveZeroValidator } from 'src/app/modules/games/services/games-validators.directive';
import { aboveEqualZeroValidator } from '../../../../modules/games/services/games-validators.directive';


@Component({
  selector: 'app-games-edit',
  templateUrl: './games-edit.component.html',
  styleUrls: ['./games-edit.component.scss']
})
export class GamesEditComponent implements OnInit {
  games$: Observable<any>;
  // selectedGame = [{
  //   completionDate: "3/21/2019",
  //   dateCreated: "2018-09-11T14:07:46+00:00",
  //   id: 1,
  //   image: "https://howlongtobeat.com/gameimages/38050_God_of_War.jpg",
  //   isComplete: false,
  //   name: "God of War",
  //   numberOfHoursPlayed: 2,
  //   numberOfHoursToComplete: 19.5,
  //   percentCompleted: "10.3",
  //   platform: "PS4",
  //   platformId: 1,
  //   priority: 8,
  // }];

  selectedGame: [{}];

  gameForm: FormGroup;

  platforms;

  getGame() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.games$.subscribe(val => {
      this.selectedGame = val.filter(x => x.id === id);
    });
    console.log('selected game', this.selectedGame);
  }

  onSubmit() {
    console.log('submitting')
    if (this.gameForm.valid) {
      const formValues = {
        ...this.selectedGame[0],
        ...this.gameForm.value
      };

      console.log('form values', formValues)

      // this.store.dispatch(new UpdateGame(formValues));
    } else {
      alert('Invalid form');
    }
  }

  constructor(private store: Store<GamesState>, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.games$ = this.store.select(getGamesDataState);
    this.getGame();

    this.store.dispatch(new GetPlatforms());

    this.store.select(getPlatformsDataState).subscribe(val => this.platforms = val)

    // TODO: is this good architecture? Getting platforms here?


    this.gameForm = new FormGroup({
      name: new FormControl(this.selectedGame[0].name, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      image: new FormControl(this.selectedGame[0].image, Validators.required),
      platform: new FormControl(this.selectedGame[0].platform, Validators.required),
      numberOfHoursToComplete: new FormControl(this.selectedGame[0].numberOfHoursToComplete, [Validators.required, aboveZeroValidator()]),
      priority: new FormControl(this.selectedGame[0].priority, Validators.required),
      numberOfHoursPlayed: new FormControl(this.selectedGame[0].numberOfHoursPlayed, [Validators.required, aboveEqualZeroValidator()]),
      isComplete: new FormControl(this.selectedGame[0].isComplete),
    });
  }

}
