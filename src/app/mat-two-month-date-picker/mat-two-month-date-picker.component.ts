import { Component, OnInit, ViewEncapsulation, LOCALE_ID, Inject } from "@angular/core";
import { formatDate } from '@angular/common';
import { TwoMonthDatePickerComponent } from "../two-month-date-picker/two-month-date-picker.component";
import { DateTimeUtilitiesService } from "../date-time-utilities.service";
import { FormControl, FormGroupDirective, NgForm, AbstractControl, ValidationErrors } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return new Date(control.value).getDate() % 2 === 0;
  }
}
@Component({
  selector: "app-mat-two-month-date-picker",
  templateUrl: "./mat-two-month-date-picker.component.html",
  styleUrls: ["./mat-two-month-date-picker.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class MatTwoMonthDatePickerComponent extends TwoMonthDatePickerComponent
  implements OnInit {
  departureFormControl = new FormControl("", [this.isValidSelection]);
  arrivalFormControl = new FormControl("", [this.isValidSelection]);
  matcher = new MyErrorStateMatcher();
  displayDateFormat:string = 'MMM d, y';

  constructor(protected dateTimeUtilities: DateTimeUtilitiesService, @Inject(LOCALE_ID) private locale: string) {
    super(dateTimeUtilities);
    (window as any).component = this;
  }

  ngOnInit() {}

  protected isValidSelection(control: AbstractControl): ValidationErrors|null{
    return new Date(control.value).getDate() % 2 === 0 ? {'invalid':true} : null;
  }

  protected setDates() {
    if (this.departureFormControl) {
      this.departureFormControl.setValue(this.formatDateForDisplay(this.selectedDates[0]));
    }

    if (this.arrivalFormControl) {
      this.arrivalFormControl.setValue(this.formatDateForDisplay(this.selectedDates[1]));
    }
  }

  protected formatDateForDisplay(date:Date):string{
    return formatDate(date, this.displayDateFormat, this.locale)
  }
}
