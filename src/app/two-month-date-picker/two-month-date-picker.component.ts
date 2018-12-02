import { Component, EventEmitter, Output, ViewEncapsulation } from "@angular/core";
import { DateTimeUtilitiesService } from "../date-time-utilities.service";

enum DateToSelect {
  FirstDate,
  SecondDate
}

@Component({
  selector: "app-two-month-date-picker",
  templateUrl: "./two-month-date-picker.component.html",
  styleUrls: ["./two-month-date-picker.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class TwoMonthDatePickerComponent {
  @Output() onSelectionChanged = new EventEmitter<Date[]>();
  @Output() onSelectionDone = new EventEmitter<Date[]>();
  @Output() onClosed = new EventEmitter<void>();

  currentMonth: Date;
  nextMonth: Date;
  selectedDates: Date[];
  firstDate: Date;
  secondDate: Date;
  dateToSelect: DateToSelect;
  constructor(protected dateTimeUtilities: DateTimeUtilitiesService) {
    // Initialize component properties
    this.currentMonth = new Date();
    this.nextMonth = this.dateTimeUtilities.addMonths(this.currentMonth, 1);
    this.selectedDates = [];
    this.dateToSelect = DateToSelect.FirstDate;
    this.setDates();
  }

  /**
   * Scrolls the months to show one month to the past
   */
  previous() {
    this.currentMonth = this.dateTimeUtilities.substractMonths(this.currentMonth, 1);
    this.nextMonth = this.dateTimeUtilities.addMonths(this.currentMonth, 1);
  }

  /**
   * Scrolls the months to show one month to the future;
   */
  next() {
    this.currentMonth = this.dateTimeUtilities.addMonths(this.currentMonth,1);
    this.nextMonth = this.dateTimeUtilities.addMonths(this.currentMonth, 1);
  }

  /**
   * Event handler for clicking on a single day
   * @param day Date for the day selected
   */
  selectDay(day: Date) {
    switch (this.dateToSelect) {
      case DateToSelect.FirstDate: {
        this.selectedDates = [day, this.secondDate];
        this.dateToSelect = DateToSelect.SecondDate;
        break;
      }
      case DateToSelect.SecondDate: {
        this.selectedDates = [this.firstDate, day];
        break;
      }
      default:
        break;
    }
    this.sortSelectedDates();
    this.setDates();
    this.onSelectionChanged.emit(this.selectedDates);
  }

  /**
   * Sets the date to be selected to the first date
   */
  selectFirstDate() {
    this.dateToSelect = DateToSelect.FirstDate;
  }

  /**
   * Sets the date to be selected to the second date
   */
  selectSecondDate() {
    this.dateToSelect = DateToSelect.SecondDate;
  }

  /**
   * Clears all selected adtes
   */
  reset(){
    this.selectedDates = [];
    this.setDates();
    this.dateToSelect = DateToSelect.FirstDate;
  }

  /**
   * Handler for clicking the done button, emits the current date selection
   */
  done(){
    this.onSelectionDone.emit(this.selectedDates);
  }

  /**
   * Handler for clicking the close button, emits the close event
   */
  close(){
    this.onClosed.emit();
  }

  protected sortSelectedDates(){
    if(!this.selectedDates[0] || !this.selectedDates[1]){
      return;
    }

    this.selectedDates = this.selectedDates.sort((d1,d2) => d1.getTime() - d2.getTime());
  }

  protected setDates(){
    this.firstDate = this.selectedDates[0] ? this.selectedDates[0] : null;
    this.secondDate = this.selectedDates[1] ? this.selectedDates[1] : null;
  }
}
