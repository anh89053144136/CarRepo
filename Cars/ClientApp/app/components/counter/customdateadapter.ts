﻿import { NativeDateAdapter } from '@angular/material';


/** Adapts the native JS Date for use with cdk-based components that work with dates. */
export class CustomDateAdapter extends NativeDateAdapter {

    createDate(year: number, month: number, date: number): Date {
        return new Date(Date.UTC(year, month, date));
    }

    //parse(value: any): Date | null {
    //    debugger;
    //    if ((typeof value === 'string') && (value.indexOf('.') > -1)) {
    //        const str = value.split('.');

    //        const year = Number(str[2]);
    //        const month = Number(str[1]) - 1;
    //        const date = Number(str[0]);

    //        return new Date(year, month, date);
    //    } else if ((typeof value === 'string') && value === '') {
    //        return new Date();
    //    }
    //    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    //    return isNaN(timestamp) ? null : new Date(timestamp);
    //}

}