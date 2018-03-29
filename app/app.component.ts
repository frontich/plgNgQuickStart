import { Component } from '@angular/core';

import { Customer } from './model';


@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `
  <h1>{{ customer.name }}</h1>
  <p><i>{{ customer.name }} is at {{ customer.address.street }} in {{ customer.address.city }} in the {{ customer.address.region }} region.</i></p>
  <br/>
  <fieldset>
    <input [(ngModel)]="customer.name">
    <br/>
  </fieldset>  

  <label><input type="checkbox" [(ngModel)]="hideAddress">Hide address</label>

  <div [hidden]="hideAddress">
  <fieldset>
    <label>Street: <input [(ngModel)]="customer.address.street"> </label>
  </fieldset>
  <fieldset>
    <label>City: <input [(ngModel)]="customer.address.city"> </label>
  </fieldset>
    <fieldset>
      <label>State: </label> 
       <select [(ngModel)]="customer.address.state">
        <option>Gorenjska</option>
        <option>Osrednjeslovenska</option>
        <option>Primorska</option>
        <option>Prekmurska</option>
      </select>
    </fieldset>
    <fieldset>
    <label>Region: </label> 
     <select [(ngModel)]="customer.address.region">
      <option>East</option>
      <option>North</option>
      <option>South</option>
      <option>West</option>
    </select>
  </fieldset>
  </div>
  `
})
export class AppComponent {

  hideAddress = false;
  customer: Customer = {
    id: 1,
    name: 'Janez Novak',
    address: {
      street: 'Unknown street 666',
      city: 'Lost City',
      region: 'East',
      state: 'Gorenjska'
    }
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
