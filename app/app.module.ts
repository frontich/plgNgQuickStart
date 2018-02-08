import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';

// This decorator describes the class that follows it
// @NgModule is a function, it is also decorator
@NgModule({
  imports:      [ BrowserModule, FormsModule ], // What stuff do I need?
  declarations: [ AppComponent ],  // What's in my app module?
  bootstrap:    [ AppComponent ]   // Where do I start?
})
/** metadata is attached to AppModule */
export class AppModule { }
