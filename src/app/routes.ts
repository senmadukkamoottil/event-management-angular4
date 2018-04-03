import { Routes } from '@angular/router';

import { EventsListComponent } from './events-list.component';
import { CreateEventComponent } from './create-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { EventComponent } from './events/event/event.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'newevent', component: CreateEventComponent },
  { path: 'editevent/:id', component: EditEventComponent},
  { path: 'event/:id', component: EventComponent},
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
