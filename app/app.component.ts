import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `
  <h1>{{name}}</h1>
  <fieldset>
    <img [src]="image">
  </fieldset>
  `
})
export class AppComponent  {
  name = 'Alex Smith';
  image ='favicon.ico'
}

/** interpolation      == <img src={{image}}
 *  property binding   == <img [src]="image"
 */