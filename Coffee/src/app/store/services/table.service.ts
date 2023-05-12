import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILocation } from 'src/app/models/location.i';
import { ITable } from 'src/app/models/table.t';
import { enviroment } from 'src/environment';
@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient) {}

  /**
   * getAllTable
   */
  public getAllTable(): Observable<ITable[]> {
    return this.http.get<ITable[]>(enviroment.apiGetAllTable);
  }

  /**
   * getTableByLocationId
   */
  public getTableByLocationId(idLocation: number) {
    return this.http.get<ITable[]>(
      enviroment.apiGetTableByLocationId + idLocation
    );
  }
}
