import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CalendarMonthComponent } from './calendar-month/calendar-month.component';
import { TwoMonthPickerDayDirective } from './two-month-picker-day.directive';
import { TwoMonthDatePickerComponent } from './two-month-date-picker/two-month-date-picker.component';
import { ToLocalizedMonthNamePipe } from './to-localized-month-name.pipe';
import { GetMonthWeeksPipe } from './get-month-weeks.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CalendarMonthComponent, TwoMonthPickerDayDirective, TwoMonthDatePickerComponent, ToLocalizedMonthNamePipe, GetMonthWeeksPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
