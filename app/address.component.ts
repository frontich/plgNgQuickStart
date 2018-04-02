import { Component, Input, OnInit } from '@angular/core';

import { Address } from './model';
import { DataService } from './data.service';


@Component({
    moduleId: module.id,
    selector: 'address-comp',
    templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {
    @Input() address = Address;
    regions = ['vzhod', 'zahod', 'sever', 'jug', 'severozahod'];
    states: string[];
    constructor(private dataService: DataService) {

    }


    ngOnInit() {
        this.dataService.getStates().subscribe((states) => {
            this.states = states; //do 22 in 23
        });
    }
}