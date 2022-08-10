import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTimestamp'
})
export class ConvertTimestampPipe implements PipeTransform {

  monthMap = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }

  transform(ts: number): string {
    let date = new Date(ts * 1);
    let dateString = date.toLocaleString('en-us', );//`${date.getHours()}:${date.getMinutes().toPrecision(2)}:${date.getSeconds().toPrecision(2)}  ${this.monthMap[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()} `
    return dateString;
  }

}
