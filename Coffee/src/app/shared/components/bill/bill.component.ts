import { Component, Input } from '@angular/core';
import { IBill } from 'src/app/models/bill.i';
import { IDetailBill } from 'src/app/models/detailBill.i';
import { IListBill } from 'src/app/models/lstBill.i';
import { IProduct } from 'src/app/models/product.i';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent {
  @Input()
  lstBill?: IDetailBill[] = [
    {
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
    },
    {
      detailBillId: 16,
      product: {
        productId: 3,
        productName: 'TT',
        price: 15000.0,
        quantity: 100,
        img: 'null',
      },
      quantity: 2,
      billId: 19,
      productId: 3,
    },
    {
      detailBillId: 17,
      product: {
        productId: 2,
        productName: 'COFFEE sữa',
        price: 15000.0,
        quantity: 100,
        img: 'null',
      },
      quantity: 2,
      billId: 19,
      productId: 2,
    },
  ];
}
