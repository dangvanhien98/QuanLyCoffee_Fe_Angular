import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { GroupButtonModule } from '../group-button/group-button.module';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [GroupButtonModule, SearchModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
