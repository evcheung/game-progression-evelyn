import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '../../../../modules/interface/components/profile-data.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  GetProfile,
  UpdateProfile
} from './../../../../modules/profile/store/profile.actions';
import { ProfileState } from '../../../../modules/profile/store/profile.reducer';
import { getProfileDataState } from '../../../../modules/profile/store/profile.selectors';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  profile$: Observable<Response>;
  profileDataState: Response;

  // TODO: learn more about ViewChild
  @ViewChild('f') profileForm: NgForm;

  constructor(private router: Router, private store: Store<ProfileState>) {}

  onSubmit() {
    if (this.profileForm.valid) {
      this.store
        .select(getProfileDataState)
        .subscribe(val => (this.profileDataState = val));

      const formValues = {
        ...this.profileDataState,
        ...this.profileForm.form.value
      };

      this.store.dispatch(new UpdateProfile(formValues));
    } else {
      alert('Invalid form');
    }

    // this.dataService.updateProfile(this.profile$)
    // .subscribe({
    //   next: data => {
    //     this.profile$ = data;
    //     this.router.navigate(['/my-profile']);
    //   },
    //   error: err => { console.log('Error getting profile.', err); }
    // });
  }

  onCancel() {
    return this.profileForm.dirty
      ? confirm('Are you sure you want to leave without saving changes?') &&
          this.router.navigate(['/my-profile'])
      : this.router.navigate(['/my-profile']);
  }

  ngOnInit() {
    this.store.dispatch(new GetProfile());
    this.profile$ = this.store.select(getProfileDataState);
  }
}
