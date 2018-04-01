import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {
    private customersUrl = 'api/customers';

    constructor(
        private loggerService: LoggerService,
        private http: Http
    ) { }

    getCustomersAsPromise(): Promise<Customer[]> {

        this.loggerService.log('Getting customers as a Promise via HTTP...');

        return this.http.get(this.customersUrl)
            .toPromise()
            .then(response => {
                const cust = response.json().data as Customer[];
                this.loggerService.log(`Got ${cust.length} customers`);
                return cust;
            },
                error => {
                    this.loggerService.log(`An error occured ${error}`);
                    return Promise.reject('Something bad happend, check the console logs...');
                }
            );
        // const customers = createTestCustomers();
        // fake a promise
        /*return new Promise<Customer[]>(resolve => {
            setTimeout(() => {
                this.loggerService.log(`Got ${customers.length} customers`);
                resolve(customers);

            }, 1500);
        });*/
    }

    getCustomersAsObservable(): Observable<Customer[]> {
        this.loggerService.log('Getting customers as an Observable ...');
        const customers = createTestCustomers();
        return of(customers)
            .delay(1500)
            .do(() => {
                this.loggerService.log(`Got ${customers.length} customers`);
            });

    }
}