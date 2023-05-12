import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent {
  dateOfBirth = new FormControl();
  @Output() dateSelected: EventEmitter<string> = new EventEmitter<string>();
  onClick(data: any) {
    let date = formatDate(data.value, 'dd/MM/YYYY hh:mm a', 'en-US');
    this.dateSelected.emit(date);
    console.log(date);
  }
}
