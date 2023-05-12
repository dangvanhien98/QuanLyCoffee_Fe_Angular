import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILocation } from 'src/app/models/location.i';
import { enviroment } from 'src/environment';
import { ICategory } from 'src/app/models/category.i';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  /**
   * getAllCategory
   */
  public getAllCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(enviroment.apiGetAllCategory);
  }
}
