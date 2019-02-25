import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../service/profile-data.service';
import { NgForm } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})

export class ProfileEditComponent implements OnInit {

  // TODO: bad to keep repeating this object instantiation? But every component may use different items
  profile = {
    firstName: '',
    lastName: '',
    image: '',
    averageNumberOfHoursPerDay: 0,
  };

  aboveZero = false;

  // TODO: learn more about ViewChild
  @ViewChild('f') profileForm: NgForm;

  onSubmit() {
    console.log(this.profileForm.value);
  }

  constructor(private dataService: DataService) {

    this.dataService.getProfile()
      .subscribe(
        response => {
          console.log('success', response);
          this.profile = response;
          console.log('form', this.profileForm.value);
        },
        error => console.log(error)
      );

    // console.log(this.profileForm.value);
    // TODO: why doesn't this work?

  }


  ngOnInit() {
  }

}
