import { Component, Input, ViewEncapsulation, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { DateTimeUtilitiesService } from '../date-time-utilities.service';
import { CalendarDayDirective } from '../calendar-day.directive';

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarMonthComponent {

  @ContentChild(CalendarDayDirective, { read: TemplateRef }) dayTemplate;
  @Input() date: Date;

  weekdays = this.momentLocaleService.shortDaysOfWeek;

  constructor(protected momentLocaleService: DateTimeUtilitiesService) { }
}