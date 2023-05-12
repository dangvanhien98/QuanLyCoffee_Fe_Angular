import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGroupButtoon } from 'src/app/models/group-button.i';
import { ILocation } from 'src/app/models/location.i';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  location: ILocation = {
    locationId: 1,
    locationName: 'Tầng 1',
  };

  styleButton: IGroupButtoon = {
    backGoundColor: '#ffffff',
    backGoundColorActive: '#e0e0e0',
  };

  @Input() active?: boolean = true;

  @Output() locationId: EventEmitter<number> = new EventEmitter<number>();

  onClickLocation(value: number) {
    this.locationId.emit(value);
  }
}
