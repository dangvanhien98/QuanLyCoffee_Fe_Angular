import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBill } from 'src/app/models/bill.i';
import { IDetailBill } from 'src/app/models/detailBill.i';
import { IProduct } from 'src/app/models/product.i';

@Component({
  selector: 'app-row-bill',
  templateUrl: './row-bill.component.html',
  styleUrls: ['./row-bill.component.css'],
})
export class RowBillComponent {
  // @Input()
  // product?: IProduct = {
  //   productId: 1,
  //   productName: 'coffee muối',
  //   price: 150000,
  //   quantity: 1,
  // };
  @Input()
  bill?: IDetailBill = {
    detailBillId: 15,
    product: {
      productId: 1,
      productName: 'COFFE đen',
      price: 15000.0,
      quantity: 100,
      img: 'null',
    },
    quantity: 3,
    billId: 19,
    productId: 1,
  };
  @Output() deleteProduct: EventEmitter<number> = new EventEmitter<number>();
  minus(value: any) {
    if (value === this.bill?.productId) {
      if (this.bill?.quantity == 1) {
        return 1;
      }
      if (this.bill?.quantity != undefined) {
        this.bill.quantity = this.bill?.quantity - 1;
      }
    }
    return 0;
  }
  plus(value: any) {
    if (value === this.bill?.productId) {
      if (this.bill?.quantity != undefined) {
        this.bill.quantity = this.bill?.quantity + 1;
      }
    }
    return 0;
  }

  amount(price: any, quantity: any) {
    return Number(price) * Number(quantity);
  }
  delete(value: any) {
    this.deleteProduct.emit(value);
    console.log('delete id', value);
  }
}
