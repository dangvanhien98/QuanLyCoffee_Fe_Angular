import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILocation } from 'src/app/models/location.i';
import { ITable } from 'src/app/models/table.t';
import { enviroment } from 'src/environment';
import { IProduct } from 'src/app/models/product.i';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  /**
   * getAllTable
   */
  public getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(enviroment.apiGetAllProduct);
  }
}
