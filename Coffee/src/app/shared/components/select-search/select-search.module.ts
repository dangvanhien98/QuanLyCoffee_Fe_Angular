import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SelectSearchComponent } from './select-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectSearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [SelectSearchComponent],
})
export class SelectSearchModule {}
