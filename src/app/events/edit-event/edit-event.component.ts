import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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


   name = new FormControl('sen', Validators.required);
   date = new FormControl('1/1/2018', Validators.required);
   time = new FormControl('12.00', Validators.required);

   address = new FormControl('23425 se blk', Validators.required);
   city = new FormControl('Seattle', Validators.required);
   country = new FormControl('USA', Validators.required);

  constructor(private router: ActivatedRoute, private route: Router, private eventService: EventService) {
    this.event_id = this.router.snapshot.paramMap.get('id');
  }

  updateEvent(event) {
    if (this.eventForm.valid) {
      // this.eventService.updateEvent(event.value);
      this.eventService.saveEvent(event.value);
      this.route.navigate(['events']);
    // console.log(this.eventService.getEvent(this.event_id));
    }
  }

  ngOnInit() {

    this.location = new FormGroup({
     address: this.address,
     city: this.city,
     country: this.country
 });

   this.eventForm = new FormGroup({
    name: this.name,
    date: this.date,
    time: this.time,
    location: this.location
   });
  }

  validateEventName(): boolean {
    if (this.name.invalid) {
      return true;
    } else {
      return false;
    }
  }
}
