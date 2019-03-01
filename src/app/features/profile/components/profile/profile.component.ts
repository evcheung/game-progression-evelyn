import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../modules/profile/services/profile-data.service';
import { Store } from '@ngrx/store';
import { GetProfile } from './../../../../modules/profile/store/profile.actions';
import { AppState } from '../../../../modules/profile/store/profile.reducer';
import { getProfileState } from '../../../../modules/profile/store/profile.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Observable<any>;

  constructor(private dataService: DataService, private store: Store<AppState>) {

    // this.dataService.getProfile()
    //   .subscribe(
    //     response => {
    //       console.log(response);
    //       this.profile = response;
    //     },
    //     error => console.log(error)
    //   );

    // this.dataService.getProfile()
    //   .subscribe({
      //     next: data => { this.profile = data; },
      //     error: err => { console.log('Error getting profile.', err); }
      //   });


      // this.testing = store.select('profile');
  }

  // test() {
  //   this.store.dispatch(new Test());
  // }

  ngOnInit() {
    this.store.dispatch(new GetProfile());
    // this.store.select('profile').subscribe(state => this.profile = state.data);

    this.profile = this.store.select(getProfileState);

    console.log('did it work???', this.profile);

    // this.store.select('profile').subscribe(state => console.log('state', state));

  }

}
