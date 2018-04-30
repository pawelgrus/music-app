import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'Predefined title';
  constructor() { }

  ngOnInit() {
  }

  onApply() {
    console.log('// TODO search here');
  }

}
