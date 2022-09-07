import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  items = ['Test'];
  expandedIndex = 0;
  panelOpenState = false;
  showFiller = false;
  isReadMore = true
  constructor() { }

  ngOnInit(): void {
  }

  showText() {
    this.isReadMore = !this.isReadMore
 }
 sum(){
   alert("submitted sucessfully")
 }
}
