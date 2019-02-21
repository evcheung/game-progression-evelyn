import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/profile-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


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
