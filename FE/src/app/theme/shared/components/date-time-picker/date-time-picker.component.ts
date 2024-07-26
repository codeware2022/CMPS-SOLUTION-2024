import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent {
  date: string;
  time: string;
  selectedDatetime: string;
  submitted = false;
  
  @Input() isTimeNeed = false;
  @Input() label = "";
  @Input() isRequired: boolean = false;
  @Input() control: FormControl = new FormControl();
  @Output() dateSelected: EventEmitter<string> = new EventEmitter<string>();

  selected: { startDate: moment.Moment; endDate: moment.Moment };

  constructor() {
    const now = new Date();
    this.date = now.toISOString().substring(0, 10); // Default to current date
    this.time = now.toTimeString().substring(0, 5); // Default to current time
  }

  submit() {
    if (this.isTimeNeed) {
      this.selectedDatetime = `${this.date}T${this.time}`;
    } else {
      this.selectedDatetime = `${this.date}`;
    }

    this.dateSelected.emit(this.selectedDatetime);
    this.submitted = true;
  }
}
