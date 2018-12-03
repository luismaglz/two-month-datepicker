import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TwoMonthDatePickerComponent } from '../two-month-date-picker/two-month-date-picker.component';
import { DateTimeUtilitiesService } from '../date-time-utilities.service';

@Component({
  selector: 'app-mat-two-month-date-picker',
  templateUrl: './mat-two-month-date-picker.component.html',
  styleUrls: ['./mat-two-month-date-picker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MatTwoMonthDatePickerComponent extends TwoMonthDatePickerComponent implements OnInit {

  constructor(protected dateTimeUtilities: DateTimeUtilitiesService) { 
    super(dateTimeUtilities);
  }

  ngOnInit() {
  }

}
