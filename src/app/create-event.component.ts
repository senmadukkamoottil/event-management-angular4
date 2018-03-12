import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: 'create-event.component.html',
  styles: [`
    form { margin-top: 10px; }
    label { display: block; }
    .form-group { margin-top: 5px; }
    span{
      display: inline-block;
      color: orange;
      font-size: 12px;
    }
    .cancel-btn:hover{
      cursor: pointer;
    }
    .submit-btn:hover{
      cursor: pointer;
    }
  `]
})
export class CreateEventComponent {
  constructor(private eventService: EventService, private router: Router) {

  }

  createEvent(eventForm) {
    this.eventService.saveEvent(eventForm.value);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
