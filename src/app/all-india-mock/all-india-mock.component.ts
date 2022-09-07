import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-india-mock',
  templateUrl: './all-india-mock.component.html',
  styleUrls: ['./all-india-mock.component.scss']
})
export class AllIndiaMockComponent implements OnInit {
  items = ['Test'];
  expandedIndex = 0;
  panelOpenState = false;
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
