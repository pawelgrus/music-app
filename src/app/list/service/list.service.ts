
import { IAlbum } from '../model/iAlbum';
import { IAlbumFilter } from '../model/iAlbumFilter';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ListService {
  private search = new Subject<IAlbumFilter>();
  $search: Observable<IAlbumFilter>;
  constructor() {
    this.$search = this.search.asObservable();
  }

  public setSearch(search: IAlbumFilter): void {
    this.search.next(search);
  }
}
