import { NgModule } from '@angular/core';
import { BillComponent } from './bill.component';
import { RowBillModule } from '../row-bill/row-bill.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [BillComponent],
  imports: [RowBillModule, BrowserModule],
  exports: [BillComponent],
})
export class BillModule {}
