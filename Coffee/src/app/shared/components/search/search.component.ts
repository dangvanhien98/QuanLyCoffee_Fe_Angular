import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() textSearch: EventEmitter<string> = new EventEmitter<string>();
  searchText: any;
  onKeySearch() {
    this.textSearch.emit(this.searchText);
    console.log(this.searchText);
  }
}
