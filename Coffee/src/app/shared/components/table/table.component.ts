import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGroupButtoon } from 'src/app/models/group-button.i';
import { ITable } from 'src/app/models/table.t';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input()
  table: ITable = {
    tableId: 1,
    tableName: 'Bàn 1',
  };

  @Input() active?: boolean = false;

  @Output() onLickTable: EventEmitter<number> = new EventEmitter<number>();
  @Output() tableName: EventEmitter<string> = new EventEmitter<string>();
  styleTable: IGroupButtoon = {
    backGoundColor: '#ffffff',
    backGoundColorActive: '#e0e0e0',
  };

  onClickTable(value: number) {
    this.onLickTable.emit(value);
    this.tableName.emit(this.table.tableName);
  }
}
