import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `
  <h1>{{name}}</h1>
  <p><i>{{name}} lives in {{region}} region.</i></p>
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
  <fieldset>
    <img [src]="image">
  </fieldset>
  <label [style.color]="color">Favorite color: </label>
  <button (click)="clicked()">Toggle color</button>
  <select (change)="colorChange($event.target.value)">
    <option>red</option>
    <option>grey</option>
    <option>orange</option>
  </select>
  `
})
export class AppComponent {
  name = 'Janez Novak';
  image = 'favicon.ico';
  color = 'green';
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
  clicked() {
    this.color = this.color === "green" ? "blue" : "green";
  }

  colorChange(color: string) {
    this.color = color;
  }
}

/** 
 * interpolation      == <img src={{image}}
 *  property binding   == <img [src]="image"
 * 
 */

/**
 * #selector && selector.value 
 * $event.target.value
 */