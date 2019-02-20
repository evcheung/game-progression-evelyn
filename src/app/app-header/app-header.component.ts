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
        response => {
          // const data = response.json();
          console.log(response.id);
        },
        error => console.log(error)
      );
  }

  ngOnInit() {
  }

}
