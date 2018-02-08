import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Http, RequestOptions } from '@angular/http';


@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;
    public myDate: Date;

    public myFilter = (d: Date): boolean => {
        //const day = d.getDay();
        //d.setDate(27);
        //debugger;
        // THIS FUNCTION CANNOT ACCESS THE VARIABLE 'someDateToBlock'
        return true;
    }

    constructor(private http: Http,
         @Inject('BASE_URL') private baseUrl: string) {
    }

    public incrementCounter() {
        this.currentCount++;
    }

    public getDate() {
        debugger;
        var dt = new Date(Date.UTC(this.myDate.getFullYear(), this.myDate.getMonth(), this.myDate.getDate()));
        var dtStr = JSON.stringify(dt);
        
        //var dtStr2 = dt.toString();
        //this.http.get(this.baseUrl + 'api/car').subscribe(result => {
        //    var products = JSON.parse(result.text(), function (key, value) {
        //        if (key == 'produced') return new Date(value);

        //        return value;
        //    }) as Product[];

        //    this.myDate = products[0].produced;
        //    debugger;
        //}, error => console.error(error));

        //this.http.post(this.baseUrl + 'api/car', this.myDate).subscribe(result => {
        //    debugger;
        //}, error => console.error(error));
    }
}
