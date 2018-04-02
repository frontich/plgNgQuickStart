import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { LoggerService } from './logger.service';
import { Customer } from './model';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class DataService {
    private customersUrl = 'api/customers';
    private statesUrl = 'api/states';

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
        this.loggerService.log('Getting customers as an Observable via HTTP...');

        return this.http.get(this.customersUrl)
            .map(response => response.json().data as Customer[])
            .do((custs) => {
                this.loggerService.log(`Got ${custs.length} customers`);
            });
        /*this.loggerService.log('Getting customers as an Observable ...');
        const customers = createTestCustomers();
        return of(customers)
            .delay(1500)
            .do(() => {
                this.loggerService.log(`Got ${customers.length} customers`);
            });*/

    }

    getStates(): Observable<string[]> {
        this.loggerService.log('Getting states as an Observable via HTTP...');

        return this.http.get(this.statesUrl)
            .map(response => response.json().data as string[])
            .do((st) => {
                this.loggerService.log(`Got ${st.length} states`);
            }).catch((error: any) => {
                this.loggerService.log(`An error occured ${error}`);
                return Observable.throw('Something bad happened in getting states, please check the console');
            });
    }
}