import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGroupButtoon } from 'src/app/models/group-button.i';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input()
  buttonTable: IGroupButtoon = {
    icon: './../../../../assets/images/table.png',
    backGoundColor: 'rgb(6, 129, 173)',
    text: 'Phòng/Bàn',
    type: 'table',
  };

  @Input()
  buttonMenu: IGroupButtoon = {
    icon: './../../../../assets/images/menu.png',
    backGoundColor: '',
    text: 'Thực Đơn',
    type: 'menu',
  };

  @Output() eventClick: EventEmitter<string> = new EventEmitter<string>();
  btnClick(event: any) {
    this.eventClick.emit(event);
    console.log('click', event);
  }
}
