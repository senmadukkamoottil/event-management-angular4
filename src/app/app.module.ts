import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list.component';
import { CreateEventComponent } from './create-event.component';
import { EventService } from './event.service';
import { appRoutes } from './routes';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    CreateEventComponent,
    MenuComponent
  ],
  providers: [ EventService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

