import { Injectable } from '@angular/core';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';


@Injectable()
export class DataService {

    constructor(private loggerService: LoggerService) { }

    getCustomersAsPromise(): Promise<Customer[]> {

        this.loggerService.log('Getting customers as a Promise ...');
        const customers = createTestCustomers();
        // fake a promise
        return new Promise<Customer[]>(resolve => {
            setTimeout(() => {
                this.loggerService.log(`Got ${customers.length} customers`);
                resolve(customers);

            }, 1500);
        });
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