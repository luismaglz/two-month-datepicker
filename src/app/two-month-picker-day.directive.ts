import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTwoMonthPickerDay]'
})
export class TwoMonthPickerDayDirective {

  @HostBinding('class.selected')
  isSelected: boolean;

  @HostBinding('class.between-selected')
  isBetweenSelected: boolean;

  @Input() day: Date;

  @Input()
  set selectedDates(dates: Date[]) {

    // Set selected
    this.isSelected = dates.filter(d => d!= null).findIndex(d => this.day.getTime() === d.getTime()) > -1;

    // Set between selected dates
    this.isBetweenSelected = false;
    if (Array.isArray(dates) && dates.length > 1) {
      dates.reduce((previousDate, currentDate) => {
        if (previousDate < this.day && currentDate > this.day) {
          this.isBetweenSelected = true;
        }
        return currentDate;
      }, dates[0])
    }
  };

  constructor() { }

}