import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGroupButtoon } from 'src/app/models/group-button.i';

@Component({
  selector: 'app-group-button',
  templateUrl: './group-button.component.html',
  styleUrls: ['./group-button.component.css'],
})
export class GroupButtonComponent {
  @Input()
  buttonTable: IGroupButtoon = {
    icon: './../../../../assets/images/table.png',
    backGoundColor: '',
    text: 'Phòng/Bàn',
    type: 'submitTable',
  };

  @Input()
  buttonMenu: IGroupButtoon = {
    icon: './../../../../assets/images/menu.png',
    backGoundColor: '',
    text: 'Thực Đơn',
    type: 'submitMenu',
  };
  @Output() btnClick: EventEmitter<string> = new EventEmitter<string>();

  // onClickTable = false;
  // onClickMenu = false;
  activeTable() {
    this.buttonTable.backGoundColor = 'rgb(6, 129, 173)';
    this.buttonMenu.backGoundColor = 'buttonface';
    this.btnClick.emit(this.buttonTable.type);
  }
  activeMenu() {
    this.buttonMenu.backGoundColor = 'rgb(6, 129, 173)';
    this.buttonTable.backGoundColor = 'buttonface';
    this.btnClick.emit(this.buttonMenu.type);
  }
}
