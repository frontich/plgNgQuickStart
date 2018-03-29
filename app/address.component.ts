import { Component, Input } from '@angular/core';

import { Address } from './model';

@Component({
    selector: 'my-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent {
    @Input address : Address;
    regions = ['vzhod', 'zahod', 'sever', 'jug', 'severozahod'];
    states = ['Slovenija', 'Slovaška', 'Sibirija'];
}