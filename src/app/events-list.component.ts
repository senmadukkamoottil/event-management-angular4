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

  // Todo Sort function
  sortEventList(sortOrder) {
    if (this.sortType === 'Ascending' ) {
      this.events.sort(this.sortFunction1);
    } else {
      this.events.sort(this.sortFunction2);
    }
    this.sortType = (sortOrder === 'Ascending' ? 'Descending' : 'Ascending');
  }

  sortFunction1(e1: any, e2: any): number {
    if (e1.name > e2.name) {
      return 1;
    } else if ( e1.name === e2.name) {
      return 0;
    } else {
      return -1;
    }
  }


sortFunction2(e1: any, e2: any): number {
  if (e1.name < e2.name) {
    return 1;
  } else if ( e1.name === e2.name) {
    return 0;
  } else {
    return -1;
  }
}
}

