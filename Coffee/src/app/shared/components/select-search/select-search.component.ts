import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from 'src/app/models/category.i';

@Component({
  selector: 'app-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.css'],
})
export class SelectSearchComponent {
  @Input()
  categories: ICategory[] = [
    // {
    //   categoryId: 1,
    //   categoryName: 'cfe',
    // },
    // {
    //   categoryId: 2,
    //   categoryName: 'cfe1',
    // },
    // {
    //   categoryId: 3,
    //   categoryName: 'cfe2',
    // },
    // {
    //   categoryId: 4,
    //   categoryName: 'cfe3',
    // },
    // {
    //   categoryId: 5,
    //   categoryName: 'cfe4',
    // },
    // {
    //   categoryId: 6,
    //   categoryName: 'cfe5',
    // },
  ];

  @Output() outPutIdCategory: EventEmitter<number> = new EventEmitter<number>();
  textSearch: string = '';
  displayOption = 'none';
  onCLickSearch() {
    this.categoriesFilter = this.categories;
    if (this.displayOption == 'none') this.displayOption = 'block';
    else this.displayOption = 'none';
  }

  onOpition(value: any) {
    this.textSearch = value;
    this.displayOption = 'none';
  }

  getIdCategory(value: number) {
    this.outPutIdCategory.emit(value);
    console.log('id category: ', value);
  }
  categoriesFilter: ICategory[] = this.categories;
  onKeyDown() {
    console.log('cate', this.categories);

    this.categoriesFilter = this.categories;
    return (this.categoriesFilter = this.categoriesFilter.filter((item) =>
      item.categoryName
        ?.toLocaleLowerCase()
        .includes(this.textSearch.toLocaleLowerCase())
    ));
  }
}
