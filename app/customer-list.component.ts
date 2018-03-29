import { Component } from '@angular/core';

import { Customer } from './model';


@Component({
  moduleId: module.id,
  selector: 'customer-list', // to use me, put <my-app> in index.html
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent {

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
