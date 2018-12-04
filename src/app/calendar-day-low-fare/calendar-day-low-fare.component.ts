import { Component, OnInit, HostBinding, Input } from "@angular/core";

@Component({
  selector: "app-calendar-day-low-fare",
  templateUrl: "./calendar-day-low-fare.component.html",
  styleUrls: ["./calendar-day-low-fare.component.css"]
})
export class CalendarDayLowFareComponent {
  @HostBinding("class.selected")
  isSelected: boolean;

  @HostBinding("class.between-selected")
  isBetweenSelected: boolean;

  @HostBinding("class.begin")
  begin: boolean;

  @HostBinding("class.end")
  end: boolean;

  @Input() day: Date;

  @Input()
  set selectedDates(dates: Date[]) {
    // Set selected
    const index = dates
      .filter(d => d != null)
      .findIndex(d => this.day.getTime() === d.getTime());

    this.isSelected = index > -1;
    
    this.begin = this.end = false;

    if (dates[0] && dates[1]) {
      this.begin = index === 0;
      this.end = index === 1;
    }

    // Set between selected dates
    this.isBetweenSelected = false;
    if (Array.isArray(dates) && dates.length > 1) {
      dates.reduce((previousDate, currentDate) => {
        if (previousDate < this.day && currentDate > this.day) {
          this.isBetweenSelected = true;
        }
        return currentDate;
      }, dates[0]);
    }
  }

  constructor() {}
}
