import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  title = 'Predefined title';
  lenght: number;
  artist: string;
  constructor() { }

  ngOnInit() {
  }

  onApply() {
    console.log('// TODO search here');
  }

}
