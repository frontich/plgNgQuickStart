import { Component, OnInit } from '@angular/core';

import { Customer } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';


@Component({
  moduleId: module.id,
  selector: 'customer-list', // to use me, put <my-app> in index.html
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  customer: Customer;

  constructor(private dataService: DataService, private loggerService: LoggerService) {

  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    //this.customers = this.dataService.getCustomers();
    this.loggerService.log('Getting the customers...');
    this.dataService.getCustomers().then(custs => {
      this.customers = custs;
    })
  }

  shift(increment: number) {
    let ix = this.customers.findIndex(cust => cust === this.customer) + increment;
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }
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
