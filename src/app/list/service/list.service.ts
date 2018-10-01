
import { IAlbum } from '../model/iAlbum';
import { IAlbumFilter } from '../model/iAlbumFilter';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ListService {
  search = new Subject<IAlbumFilter>();

  public setSearch(search: IAlbumFilter): void {
    this.search.next(search);
  }
}
