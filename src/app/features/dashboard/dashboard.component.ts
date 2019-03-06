import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../app/modules/dashboard/services/dashboard-data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetGames } from './../../../app/modules/dashboard/store/dashboard.actions';
import { getDashboardGamesStatsState } from './../../modules/dashboard/store/dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboard$: Observable<any>;

  constructor(private dataService: DataService, private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new GetGames());
    this.dashboard$ = this.store.select(getDashboardGamesStatsState);

    // this.dataService.getGames().subscribe({
    //   next: data => {
    //     this.data = data;
    //     console.log('GET request success - [dashboard] incomplete games', data);
    //   }
    // });
  }
}
