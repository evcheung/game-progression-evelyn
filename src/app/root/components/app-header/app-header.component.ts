import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../modules/profile/services/profile-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {

  profile = { };

  constructor(private dataService: DataService) {
    // this.dataService.getProfile()
    //   .subscribe(
    //     response => {
    //       this.profile = response;
    //     },
    //     error => console.log(error)
    //   );

    this.dataService.getProfile()
      .subscribe({
        // TODO: investigate why next(data) {...} syntax did not work. Scope problem? maybe this.profile didn't have access
        next: data => { this.profile = data; },
        error: err => { console.log('Error getting profile.', err); }
      });

  }

  ngOnInit() {
  }

}
