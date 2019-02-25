import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../service/profile-data.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})

export class ProfileEditComponent implements OnInit {

  // TODO: bad to keep repeating this object instantiation? But every component may use different items
  profile = { };

  aboveZero = false;

  // TODO: learn more about ViewChild
  @ViewChild('f') profileForm: NgForm;

  constructor(private dataService: DataService) {

    this.dataService.getProfile()
      .subscribe({
        next: data => { this.profile = data; },
        error: err => { console.log('Error getting profile.', err); }
      });
  }

  onSubmit() {
    this.dataService.updateProfile(this.profile)
      .subscribe(
        response => {
          console.log('UPDATED', response);
        },
        error => console.log('ERROR UPDATING', error)
      );
  }

  ngOnInit() {
  }

}
