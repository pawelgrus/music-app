import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-app';
  listInited = false;

  onClickList() {
    this.listInited = true;
  }

  onClickComeBack() {
    this.listInited = false;
  }
}
