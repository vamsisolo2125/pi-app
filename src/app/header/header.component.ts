import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Testcanactivate } from '../gaurd';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  checklogin: any= localStorage.getItem('loginmail')
  loginstatus: string='Log in';
  constructor(private router:Router) { 
    {
      if(this.checklogin)
      this.loginstatus='Log Out'
    
   }
  
  }

  ngOnInit(): void {
    console.log('store',this.checklogin)
  }
  loginchange()
  {
    canActivate: [Testcanactivate]
    // if(this.checklogin)
    if(this.checklogin){
      localStorage.removeItem('loginmail')
      this.router.navigateByUrl('/')
     
    }
    else{
      this.router.navigateByUrl('/login')
     
    }
  }
}
