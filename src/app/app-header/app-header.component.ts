import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/database.service';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {

  profile = {
    firstName: '',
    lastName: '',
    image: '',
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
