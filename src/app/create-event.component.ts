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
  `]
})
export class CreateEventComponent {
  constructor(private eventService: EventService, private router: Router) {

  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
