import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/database.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})



export class AppHeaderComponent implements OnInit {

  constructor(private dataService: DataService) {
    this.dataService.getProfile()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          console.log(data);
        },
        error => console.log(error)
      );
  }

  ngOnInit() {
  }

}
