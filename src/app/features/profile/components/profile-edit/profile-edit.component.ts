import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/profile-data.service';

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

  constructor(private dataService: DataService) {

    this.dataService.getProfile()
      .subscribe(
        response => {
          console.log(response);
          this.profile = response;
        },
        error => console.log(error)
      );
  }


  ngOnInit() {
  }

}
