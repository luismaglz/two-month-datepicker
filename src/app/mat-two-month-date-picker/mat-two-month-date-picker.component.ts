import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TwoMonthDatePickerComponent } from '../two-month-date-picker/two-month-date-picker.component';
import { DateTimeUtilitiesService } from '../date-time-utilities.service';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    console.log(control.value);
    return new Date(control.value).getDate() % 2 === 0;
  }
}

@Component({
  selector: 'app-mat-two-month-date-picker',
  templateUrl: './mat-two-month-date-picker.component.html',
  styleUrls: ['./mat-two-month-date-picker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MatTwoMonthDatePickerComponent extends TwoMonthDatePickerComponent implements OnInit {

  departureFormControl = new FormControl('', []);
  arrivalFormControl = new FormControl('', []);

  matcher = new MyErrorStateMatcher();

  constructor(protected dateTimeUtilities: DateTimeUtilitiesService) { 
    super(dateTimeUtilities);
  }

  ngOnInit() {
  }

}
