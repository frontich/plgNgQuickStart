import { Injectable } from '@angular/core';

import { createTestCustomers  } from './test-data';
import { LoggerService } from './logger.service';

@Injectable()
export class DataService {

    constructor(private loggerService: LoggerService) { }

    getCustomers(){
        this.loggerService.log('I have got ' + createTestCustomers().length + ' customers');
        return createTestCustomers();

    }
}