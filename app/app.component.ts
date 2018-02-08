import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `
  <h1>{{name}}</h1>
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
  color = "green";

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