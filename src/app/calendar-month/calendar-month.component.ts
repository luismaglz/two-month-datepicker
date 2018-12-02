import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { DateTimeUtilitiesService } from '../date-time-utilities.service';

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarMonthComponent {

  @Input() date: Date;
  @Input() selectedDates: Date[];
  @Output() onDaySelected = new EventEmitter<Date>();

  weekdays = this.momentLocaleService.shortDaysOfWeek;

  constructor(protected momentLocaleService: DateTimeUtilitiesService) { }

  selectDay(day:Date){
    this.onDaySelected.emit(day);
  }
}