import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: Router) {
    console.log(this.route.url);
   }

   getActiveRoute() {
     return this.route.url;
   }

  ngOnInit() {
  }

}
