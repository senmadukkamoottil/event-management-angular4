import { Component, OnChanges } from '@angular/core';
import { EventService } from './event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
  styles: [`
    th, td { font-size: 16px; padding:5px 10px;}
  `]
})
export class EventsListComponent implements OnChanges {
  events: any;
  sortType: String = 'Descending';
  constructor(private eventService: EventService, private route: Router) {
    this.events = this.eventService.getEvents();
  }

  editEvent(id) {
    this.route.navigate(['editevent', id]);
  }

  ngOnChanges(): void {
    console.log('here');
  }

  sortEventList(sortOrder) {
    if (this.sortType === 'Ascending' ) {
      this.events.sort(this.aSort);
    } else {
      this.events.sort(this.dSort);
    }
    this.sortType = (sortOrder === 'Ascending' ? 'Descending' : 'Ascending');
  }

  aSort(e1, e2) {
    if (e1.name.toUpperCase() > e2.name.toUpperCase()) {
      return 1;
    } else if ( e1.name.toUpperCase() === e2.name.toUpperCase()) {
      return 0;
    } else {
      return -1;
    }
  }

dSort(e1, e2) {
  if (e1.name.toUpperCase() < e2.name.toUpperCase()) {
    return 1;
  } else if ( e1.name.toUpperCase() === e2.name.toUpperCase()) {
    return 0;
  } else {
    return -1;
  }
}
}

