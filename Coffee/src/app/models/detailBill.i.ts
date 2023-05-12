import { IProduct } from './product.i';

export interface IDetailBill {
  detailBillId?: number;
  quantity?: number;
  billId?: number;
  product?: IProduct;
  productId?: number;
}
