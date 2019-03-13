import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-games-card',
  templateUrl: './games-card.component.html',
  styleUrls: ['./games-card.component.scss']
})
export class GamesCardComponent implements OnInit {

  constructor() { }

  @Input() game:any;

  ngOnInit() {
  }

}
