import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-session',
  templateUrl: './event-session.component.html',
  styleUrls: ['./event-session.component.css'],
})
export class EventSessionComponent implements OnInit {

  @Input() eventSession: any;
  constructor() {
  }

  ngOnInit() {

  }

}
