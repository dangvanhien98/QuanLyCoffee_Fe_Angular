import { IDetailBill } from './detailBill.i';

export interface IListBill {
  billId: number;
  dateIn?: string;
  dateOut?: string;
  billStatus?: string;
  detailBills?: IDetailBill[];
  tableId?: number;
}
