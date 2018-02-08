import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `
  <h1>{{name}}</h1>
  <p><i>{{name}} lives in {{region}} region.</i></p>
  <br/>

  <input [value]="name" (input)="name=$event.target.value"><br/>
  <input [value]="name" (keyup)="name=$event.target.value"><br/>
  <input [value]="name" (keyup.enter)="name=$event.target.value"><br/>
  <br/>

  <button (click)="addressClick()">Show/Hide address</button>

  <div [hidden]="hideAddress">
    <fieldset>
      <label>Street: </label>{{street}}
    </fieldset>
    <fieldset>
      <label>City: </label>{{city}}
    </fieldset>
    <fieldset>
      <label>Region: </label> 
      <select (change)="regionChange($event.target.value)">
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
  name = 'Janez Novak';
  street = 'Ulica bratov Tatov, Stevilka 666';
  city = 'Any town';
  region = 'West'
  hideAddress = false;

  regionChange(region:string){
    this.region = region;
  }

  addressClick() {
    this.hideAddress = !this.hideAddress;
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
 */

/**
 *  input and keyup and keyup.enter event for <input> element
 */