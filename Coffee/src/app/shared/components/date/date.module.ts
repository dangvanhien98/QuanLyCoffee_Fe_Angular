import { NgModule } from '@angular/core';
import { DateComponent } from './date.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [DateComponent],
  imports: [
    MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [DateComponent],
})
export class DateModule {}
