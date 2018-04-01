import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent } from './address.component';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// This decorator describes the class that follows it
// @NgModule is a function, it is also decorator
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)], // What stuff do I need?
  declarations: [AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    AddressComponent
  ],
  providers: [DataService, LoggerService], // What's in my app module?
  bootstrap: [AppComponent]   // Where do I start?
})
/** metadata is attached to AppModule */
export class AppModule { }
