import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILocation } from 'src/app/models/location.i';
import { enviroment } from 'src/environment';
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  /**
   * getAllLocation
   */
  public getAllLocation(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(enviroment.apiGetAllLocation);
  }
}
