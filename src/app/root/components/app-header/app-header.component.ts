import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../modules/profile/services/profile-data.service';
import { Store } from '@ngrx/store';
import { Response } from '../../../modules/interface/components/profile-data.interface';
import { Observable } from 'rxjs';
import { GetProfile } from './../../../../app/modules/profile/store/profile.actions';
import { ProfileState } from '../../../../app/modules/profile/store/profile.reducer';
import { getProfileDataState } from '../../../../app/modules/profile/store/profile.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  profile$: Observable<Response>;

  constructor(
    private dataService: DataService,
    private store: Store<ProfileState>
  ) {
    // this.dataService.getProfile()
    //   .subscribe(
    //     response => {
    //       this.profile = response;
    //     },
    //     error => console.log(error)
    //   );
    // this.dataService.getProfile()
    //   .subscribe({
    //     // TODO: investigate why next(data) {...} syntax did not work. Scope problem? maybe this.profile didn't have access
    //     next: data => { this.profile = data; },
    //     error: err => { console.log('Error getting profile.', err); }
    //   });
  }

  ngOnInit() {
    this.store.dispatch(new GetProfile());
    this.profile$ = this.store.select(getProfileDataState);
  }
}
