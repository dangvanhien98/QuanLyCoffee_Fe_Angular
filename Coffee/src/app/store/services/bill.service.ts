import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILocation } from 'src/app/models/location.i';
import { enviroment } from 'src/environment';
import { ICategory } from 'src/app/models/category.i';
import { IDetailBill } from 'src/app/models/detailBill.i';
import { IListBill } from 'src/app/models/lstBill.i';
import { IAddProduct } from 'src/app/models/addProduct.i';
@Injectable({
  providedIn: 'root',
})
export class BillService {
  constructor(private http: HttpClient) {}

  /**
   * getAllCategory
   */
  public getBillByIdTable(idTable: number): Observable<IListBill> {
    return this.http.get<IListBill>(enviroment.apiGetBillByIdTable + idTable);
  }

  public addBillByTable(
    idTable: number,
    params: IAddProduct
  ): Observable<void> {
    return this.http.post<void>(enviroment.apiAddBillByTable + idTable, params);
  }
}
