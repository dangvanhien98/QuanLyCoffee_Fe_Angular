import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product.i';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input()
  product: IProduct = {
    productId: 1,
    productName: 'CF Muối',
    img: 'https://lehoangdiepthao.com/wp-content/uploads/2021/01/cach-pha-cafe-muoi-1.jpg',
    price: 20.0,
  };

  style = 'none';

  @Output() productClick: EventEmitter<number> = new EventEmitter<number>();

  onClickProduct() {
    this.productClick.emit(this.product.productId);
  }

  onMouse() {
    this.style = 'block';
  }
  leaveMouse() {
    this.style = 'none';
  }
}
