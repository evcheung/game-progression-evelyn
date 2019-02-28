import { Test } from './../../../../modules/profile/store/profile.actions';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../modules/profile/services/profile-data.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../modules/profile/store/profile.reducer';
// import { Observable } from 'rxjs/Observable';
import * as ProfileActions from '../../../../modules/profile/store/profile.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  profile = {
    // firstName: '',
    // lastName: '',
    // image: '',
    // averageNumberOfHoursPerDay: 0,
  };

  // testing: Observable<AppState>;

  constructor(private dataService: DataService, private store: Store<AppState>) {

    // this.dataService.getProfile()
    //   .subscribe(
    //     response => {
    //       console.log(response);
    //       this.profile = response;
    //     },
    //     error => console.log(error)
    //   );

    // this.testing = store.select('profile');

    this.dataService.getProfile()
      .subscribe({
        next: data => { this.profile = data; },
        error: err => { console.log('Error getting profile.', err); }
      });
  }

  test() {
    this.store.dispatch(new Test());
  }

  ngOnInit() {
  }

}
