import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../event.service';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  event_id: string;
  eventForm: FormGroup;
  location: FormGroup;

  constructor(private router: ActivatedRoute, private route: Router, private eventService: EventService) {
    this.event_id = this.router.snapshot.paramMap.get('id');
  }

  updateEvent(event) {
     this.eventService.updateEvent(event.value);
     this.route.navigate(['events']);
    // console.log(this.eventService.getEvent(this.event_id));
  }

  ngOnInit() {
   const name = new FormControl('sen');
   const date = new FormControl('1/1/2018');
   const time = new FormControl('12.00');

   const address = new FormControl('23425 se blk');
   const city = new FormControl('Seattle');
   const country = new FormControl('USA');


   this.location = new FormGroup({
     address: address,
     city: city,
     country: country
 });

   this.eventForm = new FormGroup({
    name: name,
    date: date,
    time: time,
    location: this.location
   });
  }
}
