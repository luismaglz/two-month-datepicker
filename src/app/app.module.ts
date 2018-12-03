import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CalendarMonthComponent } from "./calendar-month/calendar-month.component";
import { TwoMonthDatePickerComponent } from "./two-month-date-picker/two-month-date-picker.component";
import { ToLocalizedMonthNamePipe } from "./to-localized-month-name.pipe";
import { GetMonthWeeksPipe } from "./get-month-weeks.pipe";
import { CalendarDayLowFareComponent } from "./calendar-day-low-fare/calendar-day-low-fare.component";
import { CalendarDayDirective } from "./calendar-day.directive";
import { MatTwoMonthDatePickerComponent } from "./mat-two-month-date-picker/mat-two-month-date-picker.component";

// Material
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CalendarMonthComponent,
    TwoMonthDatePickerComponent,
    ToLocalizedMonthNamePipe,
    GetMonthWeeksPipe,
    CalendarDayLowFareComponent,
    CalendarDayDirective,
    MatTwoMonthDatePickerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
