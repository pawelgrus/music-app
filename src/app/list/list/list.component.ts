import { IAlbum } from '../model/iAlbum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  searchInited = false;
  albumList: IAlbum[] = [];

  constructor() { }

  ngOnInit() {
    this.albumList.push({title: 'custom title', artist: 'artysta', length: 40});
    this.albumList.push({title: 'slams atack', artist: 'Peja', length: 200, placeOfRecord: 'Warsaw'});
  }

  onClickSearch() {
    this.searchInited = true;
  }

}