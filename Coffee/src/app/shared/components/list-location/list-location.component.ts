import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILocation } from 'src/app/models/location.i';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.css'],
})
export class ListLocationComponent {
  @Input()
  lstLocation: ILocation[] = [
    // {
    //   locationId: 1,
    //   locationName: 'Tầng 1',
    //   status: true,
    // },
    // {
    //   locationId: 2,
    //   locationName: 'Tầng 2',
    //   status: false,
    // },
    // {
    //   locationId: 3,
    //   locationName: 'Tầng 3',
    //   status: false,
    // },
    // {
    //   locationId: 4,
    //   locationName: 'Tầng 4',
    //   status: false,
    // },
    // {
    //   locationId: 5,
    //   locationName: 'Tầng 5',
    //   status: false,
    // },
  ];

  @Output() idLocation: EventEmitter<number> = new EventEmitter<number>();

  onClickLocation(value: number) {
    this.lstLocation.forEach((element) => {
      if (element.locationId == value) element.status = true;
      else element.status = false;
    });
    this.idLocation.emit(value);
    // console.log('id location: ', value);
  }
}
