import { NgModule } from '@angular/core';
import { ListProductComponent } from './list-product.component';
import { ProductItemModule } from '../product-item/product-item.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ListProductComponent],
  imports: [ProductItemModule, BrowserModule],
  exports: [ListProductComponent],
})
export class ListProductModule {}
