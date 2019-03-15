import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileResponse } from '../../../../interface/profile-data.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetProfile, UpdateProfile } from './../../../../modules/profile/store/profile.actions';
import { ProfileState } from '../../../../modules/profile/store/profile.reducer';
import { getProfileDataState } from '../../../../modules/profile/store/profile.selectors';
import { modifyProfile } from 'src/app/modules/profile/services/profile.functions';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  profile$: Observable<ProfileResponse>;
  profileDataState: ProfileResponse;

  // TODO: learn more about ViewChild
  @ViewChild('f') profileForm: NgForm;

  constructor(private router: Router, private store: Store<ProfileState>) {}

  onSubmit() {
    if (this.profileForm.valid) {
      const formValues = modifyProfile(this.profileDataState, this.profileForm.form.value);
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

// TODO: how to move this out into functions file? i.e. how to handle the routing
  onCancel() {
    return this.profileForm.dirty
      ? confirm('Are you sure you want to leave without saving changes?') &&
          this.router.navigate(['/my-profile'])
      : this.router.navigate(['/my-profile']);
  }

  ngOnInit() {
    this.store.dispatch(new GetProfile());
    this.profile$ = this.store.select(getProfileDataState);
    this.profile$.subscribe(val => this.profileDataState = val);
  }
}
