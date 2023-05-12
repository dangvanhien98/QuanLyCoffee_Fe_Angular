import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAddProduct } from 'src/app/models/addProduct.i';
import { IProduct } from 'src/app/models/product.i';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent {
  @Input()
  lstProduct: IProduct[] = [
    // {
    //   productId: 1,
    //   productName: 'CF Muối',
    //   img: 'https://lehoangdiepthao.com/wp-content/uploads/2021/01/cach-pha-cafe-muoi-1.jpg',
    //   price: '20,000',
    // },
    // {
    //   productId: 2,
    //   productName: 'CF Muối 1',
    //   img: 'https://lehoangdiepthao.com/wp-content/uploads/2021/01/cach-pha-cafe-muoi-1.jpg',
    //   price: '20,000',
    // },
    // {
    //   productId: 3,
    //   productName: 'CF Muối 2',
    //   img: 'https://lehoangdiepthao.com/wp-content/uploads/2021/01/cach-pha-cafe-muoi-1.jpg',
    //   price: '20,000',
    // },
    // {
    //   productId: 4,
    //   productName: 'CF Muối 3',
    //   img: 'https://lehoangdiepthao.com/wp-content/uploads/2021/01/cach-pha-cafe-muoi-1.jpg',
    //   price: '20,000',
    // },
    // {
    //   productId: 5,
    //   productName: 'CF Muối 4',
    //   img: 'https://lehoangdiepthao.com/wp-content/uploads/2021/01/cach-pha-cafe-muoi-1.jpg',
    //   price: '20,000',
    // },
    // {
    //   productId: 5,
    //   productName: 'CF Muối 4',
    //   img: 'https://lehoangdiepthao.com/wp-content/uploads/2021/01/cach-pha-cafe-muoi-1.jpg',
    //   price: '20,000',
    // },
    // {
    //   productId: 5,
    //   productName: 'CF Muối 4',
    //   img: 'https://lehoangdiepthao.com/wp-content/uploads/2021/01/cach-pha-cafe-muoi-1.jpg',
    //   price: '20,000',
    // },
  ];

  @Output() addProductClick: EventEmitter<number> = new EventEmitter<number>();

  productClick(id: number) {
    this.addProductClick.emit(id);
    // console.log(id);
  }
}
