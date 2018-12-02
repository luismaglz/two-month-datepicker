import { Component, Input } from '@angular/core';
import {DateTimeUtilitiesService } from '../date-time-utilities';

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.css']
})
export class CalendarMonthComponent {

  @Input() date: Date;
  @Input() selectedDates: Date[];
  
  weekdays = this.momentLocaleService.shortDaysOfWeek;

  constructor(protected momentLocaleService: DateTimeUtilitiesService) { }
}