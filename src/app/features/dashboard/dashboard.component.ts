import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../app/modules/dashboard/services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getIncompleteGames().subscribe({
      next: data => {
        this.data = data;
        console.log('GET request success - [dashboard] incomplete games', data);
      }
    });
  }
}
