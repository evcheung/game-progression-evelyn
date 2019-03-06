import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetProfile } from './../../../../modules/profile/store/profile.actions';
import { ProfileState } from '../../../../modules/profile/store/profile.reducer';
import { getProfileDataState } from '../../../../modules/profile/store/profile.selectors';
import { Response } from '../../../../modules/interface/components/profile-data.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile$: Observable<Response>;

  constructor(private store: Store<ProfileState>) {
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
    this.profile$ = this.store.select(getProfileDataState);

    // 2 days to do the selector/rendering state into components
    // Can do a subscribe to the profiles$ observable here
    // or do async piping in html which will subscribe to the observable too and unwrap it
    // BUT you will need to rename the observable for it to work in
  }
}
