import { NgModule } from '@angular/core';
import { HeaderModule } from './components/header/header.module';
import { GroupButtonComponent } from './components/group-button/group-button.component';
import { GroupButtonModule } from './components/group-button/group-button.module';
import { SearchComponent } from './components/search/search.component';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemModule } from './components/product-item/product-item.module';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ListProductModule } from './components/list-product/list-product.module';
import { BrowserModule } from '@angular/platform-browser';
import { SelectSearchComponent } from './components/select-search/select-search.component';
import { SelectSearchModule } from './components/select-search/select-search.module';
import { ButtonComponent } from './components/button/button.component';
import { ButtonModule } from './components/button/button.module';
import { ListLocationComponent } from './components/list-location/list-location.component';
import { ListLocationModule } from './components/list-location/list-location.module';
import { TableComponent } from './components/table/table.component';
import { TableModule } from './components/table/table.module';
import { ListTableComponent } from './components/list-table/list-table.component';
import { ListTableModule } from './components/list-table/list-table.module';
import { RowBillComponent } from './components/row-bill/row-bill.component';
import { RowBillModule } from './components/row-bill/row-bill.module';
import { BillComponent } from './components/bill/bill.component';
import { BillModule } from './components/bill/bill.module';
import { DateComponent } from './components/date/date.component';
import { DateModule } from './components/date/date.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    HeaderModule,
    ProductItemModule,
    ListProductModule,
    SelectSearchModule,
    ButtonModule,
    ListLocationModule,
    TableModule,
    ListTableModule,
    RowBillModule,
    BillModule,
    DateModule,
  ],
})
export class SharedModule {}
