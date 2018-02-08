import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { Car } from '../entities/car';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<Car>(cars);

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
    }

    ngAfterViewInit() {
        //this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    checkPaginator() {
        this.paginator.length = 200;
        this.paginator.pageIndex = 6;
    }
}

const cars: Car[] = [
    { id: 1, model: "Acura", produced: new Date(2017, 1, 9), speed: 40 },
    { id: 2, model: "Bugatti", produced: new Date(2017, 2, 10), speed: 46 },
    { id: 3, model: "Chrysler", produced: new Date(2017, 3, 11), speed: 70 },
    { id: 4, model: "Dodge", produced: new Date(2017, 4, 12), speed: 10 },
    { id: 5, model: "Buick", produced: new Date(2017, 5, 13), speed: 33 },
    { id: 6, model: "Geely", produced: new Date(2017, 6, 14), speed: 123 },
    { id: 7, model: "Infiniti", produced: new Date(2017, 7, 15), speed: 56 },
    { id: 8, model: "Koenigsegg", produced: new Date(2017, 8, 16), speed: 90 },
    { id: 9, model: "Mini", produced: new Date(2017, 9, 17), speed: 78 },
    { id: 10, model: "Suzuki", produced: new Date(2017, 10, 18), speed: 87 },
    { id: 11, model: "Tesla", produced: new Date(2017, 11, 19), speed: 64 },
    { id: 12, model: "Toyota", produced: new Date(2017, 12, 20), speed: 52 },
    { id: 13, model: "Volvo", produced: new Date(2017, 1, 21), speed: 100 },
    { id: 14, model: "Scion", produced: new Date(2017, 2, 22), speed: 60 },
    { id: 15, model: "Saturn", produced: new Date(2017, 3, 23), speed: 90 },
    { id: 16, model: "Rover", produced: new Date(2017, 4, 24), speed: 49 },
    { id: 17, model: "Roewe", produced: new Date(2017, 5, 25), speed: 30 },
    { id: 18, model: "Saab", produced: new Date(2017, 6, 26), speed: 42 },
    { id: 19, model: "Ravon", produced: new Date(2017, 7, 27), speed: 58 },
    { id: 20, model: "Smart", produced: new Date(2017, 8, 28), speed: 95 },
];