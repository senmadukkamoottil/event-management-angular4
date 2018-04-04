import {Injectable} from '@angular/core';

@Injectable()
export class EventService {
  EVENTS = [
    {id: 1, name: 'Angular Connect', date: '9/26/2036', time: '10am',
      location: {address: '1 London Rd', city: 'London', country: 'England'},
      session: [
        {id: 1, name: 'Using Angular4 Pipes', presenter: 'Joseph Peter', level: 'Intermediate', duration: 1},
        {id: 2, name: 'Using Angular4 template', presenter: 'Joseph Peter', level: 'Beginner', duration: .5}
      ]
    },
    {id: 2, name: 'ng-nl', date: '4/15/2037', time: '9am',
      location: {address: '127 DT ', city: 'Amsterdam', country: 'NL'},
      session: [
        {id: 1, name: 'Angular4 Components', presenter: 'Joseph Peter', level: 'intermediate', duration: 4}
      ]},
    {id: 3, name: 'ng-conf 2037', date: '4/15/2037', time: '9am',
      location: {address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA'},
      session: [
        {id: 1, name: 'Http and Services in Angular4', presenter: 'Joseph Peter', level: 'Beginner', duration: 8}
      ]},
    {id: 4, name: 'UN Angular Summit', date: '6/10/2037', time: '8am',
      location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'},
      session: [
        {id: 1, name: 'How to do unit testin gin Angular2', presenter: 'Joseph Peter', level: 'Expert', duration: 8}
      ]},
  ];

  saveEvent(event) {
    event.id = 99;
    this.EVENTS.push(event);
  }

  getEvent(eventId): any {
    /*const result = this.EVENTS.filter(function( event ) {
      if ( event.id === 1) {
        return true;
      } else {
        return false;
      }
    });*/

    const result = this.EVENTS.filter( event => {
      return  event.id === parseInt( eventId, 10 ) ? true : false ;
    });

    return result;
    // this.EVENTS.forEach(function(event) {
    //   if (event.id === id) {
    //     return(event.date);
    //   }
    // });
    /*  return this.getEpics()
     .map(epics => epics.filter(epic => epic.id === id)[0]); */
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
