import { Pipe, PipeTransform } from '@angular/core';
import { DateTimeUtilitiesService } from './date-time-utilities.service';

@Pipe({
  name: 'getMonthWeeks'
})
export class GetMonthWeeksPipe implements PipeTransform {

  constructor(protected dateTimeUtilities: DateTimeUtilitiesService){

  }
  transform(date: Date): Date[][] {
    return this.dateTimeUtilities.getMonthWeeks(date.getMonth(), date.getFullYear());
  }

}
