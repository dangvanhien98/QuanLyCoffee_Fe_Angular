import { NgModule } from '@angular/core';
import { ListTableComponent } from './list-table.component';
import { TableModule } from '../table/table.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListTableComponent],
  imports: [TableModule, CommonModule, BrowserModule],
  exports: [ListTableComponent],
})
export class ListTableModule {}
