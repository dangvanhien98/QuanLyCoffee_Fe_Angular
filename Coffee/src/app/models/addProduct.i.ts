import { IBill } from './bill.i';
import { IDetailBill } from './detailBill.i';

export interface IAddProduct {
  bill?: IBill;
  detailBill?: IDetailBill;
}
