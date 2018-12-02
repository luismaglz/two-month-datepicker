import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DateTimeUtilitiesService } from './date-time-utilities.service';

@Pipe({
  name: 'toLocalizedMonthName'
})
export class ToLocalizedMonthNamePipe implements PipeTransform {

  constructor(protected dateTimeUtilities: DateTimeUtilitiesService) {

  }
  transform(date: Date): Observable<string> {
    return this.dateTimeUtilities.longMonths.pipe(
      map(monthNames => monthNames[date.getMonth()])
     );
  }
}