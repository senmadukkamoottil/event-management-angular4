import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../event.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  id: any;
  event: any;
  constructor(private route: ActivatedRoute, private eventService: EventService) {
   }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.event = this.eventService.getEvent(this.id);
    if (this.event) {
       this.event = this.event[0];
    }
  }
}
