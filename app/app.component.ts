import { Component } from '@angular/core';


@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `
  <h1>{{name}}</h1>
  <p><i>{{name}} lives in {{region}} region.</i></p>
  <br/>
  <fieldset>
    <input [(ngModel)]="name">
    <input [ngModel]="name" (ngModelChange)="name=$event">
    <br/>
  </fieldset>  

  <label><input type="checkbox" [(ngModel)]="hideAddress">Hide address</label>

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