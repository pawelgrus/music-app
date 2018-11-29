import { IAlbum } from '../model/iAlbum';
import { IAlbumFilter } from '../model/iAlbumFilter';
import { ListService } from '../service/list.service';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  searchInited = false;
  albumList: IAlbum[] = [];
  private orginalAlbumList: IAlbum[] = [];

  constructor(private listService: ListService, private zone: NgZone) {
    this.listService.$search.subscribe(event => {
      this.albumList = this.orginalAlbumList.filter(al => {
        return event.title !== null && al.title.startsWith(event.title);
      });
      console.log(this.albumList);
      
    });
  }

  ngOnInit() {
    this.orginalAlbumList.push({title: 'custom title', artist: 'artysta', length: 40});
    this.orginalAlbumList.push({title: 'slams atack', artist: 'Peja', length: 200, placeOfRecord: 'Warsaw'});
    this.albumList = this.orginalAlbumList;
  }

  onClickSearch() {
    this.searchInited = true;
  }

  filter(event: IAlbumFilter) {
    this.albumList = this.orginalAlbumList.filter(al => event.artist !== null && al.artist.startsWith(event.artist));
    console.log('filter: ' + JSON.stringify(event));
  }
}
