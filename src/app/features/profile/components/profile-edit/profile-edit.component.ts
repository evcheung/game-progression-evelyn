import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../service/profile-data.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})

export class ProfileEditComponent implements OnInit {

  // TODO: bad to keep repeating this object instantiation? But every component may use different items
  profile = {
    id: 0,
    firstName: '',
    lastName: '',
    image: '',
    averageNumberOfHoursPerDay: 0,
    languageId: 0
  };

  aboveZero = false;

  // TODO: learn more about ViewChild
  @ViewChild('f') profileForm: NgForm;

  constructor(private dataService: DataService, private router: Router) {

    this.dataService.getProfile()
      .subscribe({
        next: data => { this.profile = data; },
        error: err => { console.log('Error getting profile.', err); }
      });
  }

  onSubmit() {
    this.dataService.updateProfile(this.profile)
      .subscribe({
        next: data => { this.profile = data; },
        error: err => { console.log('Error getting profile.', err); }
      });
  }

  onCancel() {
    this.profileForm.dirty
    ? confirm('Are you sure you want to leave without saving changes?') && this.router.navigate(['/my-profile'])
    : this.router.navigate(['/my-profile']);
  }

  ngOnInit() {
  }

}
