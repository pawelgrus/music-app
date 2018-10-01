import { IAlbum } from '../model/iAlbum';
import { IAlbumFilter } from '../model/iAlbumFilter';
import { ListService } from '../service/list.service';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  @Output()
    search: EventEmitter<IAlbumFilter> = new EventEmitter();
  @Input()
    searchMode: string;

  constructor(private listService: ListService) {
   }

  ngOnInit() {
    console.log('Search mode: ' + this.searchMode);
    this.form = new FormGroup({
      title: new FormControl('Predefined title'),
      lenghtGreatherThan: new FormControl('0', Validators.pattern('\d+')),
      lenghtLowerThan: new FormControl(''),
      artist: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z¹¿œæñó³¥¯ŒÆÑÓ£]+$')])),
    });
  }

  onSearch() {
    this.listService.setSearch(this.form.getRawValue());
    this.search.emit(this.form.getRawValue());
  }

}
