import { Component } from '@angular/core';

import { Customer } from './model';


@Component({
  moduleId: module.id,
  selector: 'my-app', // to use me, put <my-app> in index.html
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  regions = ['vzhod', 'zahod', 'sever', 'jug', 'severozahod'];
  states = ['Slovenija', 'Slovaška','Sibirija'];

  customers: Customer[] = [
    {
      id: 1,
      name: 'Janez Novak',
      address: {
        street: 'Unknown street 666',
        city: 'Lost City',
        region: 'severozahod',
        state: 'Slovenija'
      }
    },
    {
      id: 2,
      name: 'Marija Novak',
      address: {
        street: 'Unknown street 001',
        city: 'Found City',
        region: 'vzhod',
        state: 'Slovaška'
      }
    },
    {
      id: 2,
      name: 'Zdrava Marija',
      address: {
        street: 'Forbidden street 001',
        city: 'Blue City',
        region: 'sever',
        state: 'Sibirija'
      }
    }
  ];

  customer: Customer;
  hideAddress = false;
}

/** 
 *  interpolation      == <img src={{image}}
 *  property binding   == <img [src]="image"
 * 
 */

/**
 * #selector && selector.value 
 * $event.target.value
 * [ngModel]="name" (ngModelChange)="name=$event" IS PREFERABLE OVER [(ngModel)]="name" BUT ITS THE SAMEOLD
 */

/**
 *  input,keyup,keyup.enter, blur  events for <input> element
 */
