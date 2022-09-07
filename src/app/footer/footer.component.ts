import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

// interface Food {
//   value: string;
//   viewValue: string;
// }

// interface Car {
//   value: string;
//   viewValue: string;
// }
export class FooterComponent implements OnInit {
  selectedDay: string='';

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  };
  constructor() {
   
   }

  ngOnInit(): void {
  }
}                                  








