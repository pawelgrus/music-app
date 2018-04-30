import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListComponent],
  declarations: [SearchComponent, ListComponent]
})
export class ListModule { }
