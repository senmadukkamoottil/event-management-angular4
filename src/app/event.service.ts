import {Injectable} from '@angular/core';

@Injectable()
export class EventService {
  EVENTS = [
    {id: 1, name: 'Angular Connect', date: '9/26/2036', time: '10am',
      location: {address: '1 London Rd', city: 'London', country: 'England'}},
    {id: 2, name: 'ng-nl', date: '4/15/2037', time: '9am',
      location: {address: '127 DT ', city: 'Amsterdam', country: 'NL'}},
    {id: 3, name: 'ng-conf 2037', date: '4/15/2037', time: '9am',
      location: {address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA'}},
    {id: 4, name: 'UN Angular Summit', date: '6/10/2037', time: '8am',
      location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'}},
  ];

  saveEvent(event) {
    event.id = 99;
    this.EVENTS.push(event);
  }

  getEvent(id): any {
    // this.EVENTS.forEach(function(event) {
    //   if (event.id === 2) {
    //     console.log(event.date);
    //     return(event.date);
    //   }
    // });
//    console.log(this.EVENTS[1] + 'gg' + id);
    // for (let i = 0 ; i < this.EVENTS.length; i++) {
    //    if (this.EVENTS[i].name === '2') {
    //     return this.EVENTS[i];
    //    }
    // }
  }

  updateEvent (event) {
    for (let i = 0 ; i < this.EVENTS.length; i++) {
        if (this.EVENTS[i].id === event.id) {
          this.EVENTS[i].name = 'Hello';
          console.log('here');
        }
     }
  }

  getEvents() {
    return this.EVENTS;
  }
}
