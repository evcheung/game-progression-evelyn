import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../modules/profile/services/profile-data.service';
import { Store } from '@ngrx/store';
import { Response } from '../../../../../app/modules/interface/components/profile/profile-data.interface';
import { GetProfile } from './../../../../modules/profile/store/profile.actions';
import { getProfileState } from '../../../../modules/profile/store/profile.reducer';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  profile = {};

  constructor(private dataService: DataService, private store: Store<any>) {

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
    this.profile = this.store.select(getProfileState);
    console.log('did it work???', this.profile);

    // this.store.select('profile').subscribe(state => console.log('state', state));

  }

}
