import { NgModule } from '@angular/core';
import { ListLocationComponent } from './list-location.component';
import { ButtonModule } from '../button/button.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ListLocationComponent],
  imports: [ButtonModule, BrowserModule],
  exports: [ListLocationComponent],
})
export class ListLocationModule {}
