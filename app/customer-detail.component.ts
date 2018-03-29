import { Component, Input } from '@angular/core';

import { Customer } from './model';


@Component({
  moduleId: module.id,
  selector: 'customer-detail', // to use me, put <my-app> in index.html
  templateUrl: 'customer-detail.component.html',
  styleUrls: ['customer-detail.component.css']
})
export class CustomerDetailComponent {

  regions = ['vzhod', 'zahod', 'sever', 'jug', 'severozahod'];
  states = ['Slovenija', 'Slovaška', 'Sibirija'];

  @Input() customer: Customer;
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
