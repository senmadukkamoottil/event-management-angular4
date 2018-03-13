import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
  styles: [`
    th, td { font-size: 16px; padding:5px 10px;}
  `]
})
export class EventsListComponent {
  events: any;
  constructor(private eventService: EventService, private route: Router) {
    this.events = this.eventService.getEvents();
  }

  editEvent(id) {
    this.route.navigate(['editevent', id]);
  }
}

