import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITable } from 'src/app/models/table.t';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css'],
})
export class ListTableComponent {
  @Input()
  lstTable: ITable[] = [
    // {
    //   tableId: 1,
    //   tableName: 'Bàn 1',
    //   active: false,
    // },
    // {
    //   tableId: 2,
    //   tableName: 'Bàn 2',
    //   active: false,
    // },
    // {
    //   tableId: 3,
    //   tableName: 'Bàn 3',
    //   active: false,
    // },
    // {
    //   tableId: 4,
    //   tableName: 'Bàn 4',
    //   active: false,
    // },
    // {
    //   tableId: 5,
    //   tableName: 'Bàn 5',
    //   active: false,
    // },
    // {
    //   tableId: 6,
    //   tableName: 'Bàn 6',
    //   active: false,
    // },
  ];

  @Output() idTable: EventEmitter<number> = new EventEmitter<number>();
  @Output() tableName: EventEmitter<string> = new EventEmitter<string>();
  clickTable(value: number) {
    this.lstTable.forEach((item) => {
      if (item.tableId == value) {
        item.active = true;
      } else item.active = false;
    });
    this.idTable.emit(value);
    // console.log(this.lstTable);
  }

  getTableName(data?: string) {
    this.tableName.emit(data);
  }
}
