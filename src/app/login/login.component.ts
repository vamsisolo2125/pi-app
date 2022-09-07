import { Component, OnInit } from '@angular/core';
import { FreeapiService } from '../service/freeapi.service';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputtype: any='password'
  showPassword: boolean=false
  model:any={}
  login:any
  public verify!: object
  onsubmit(form:NgForm){
    this.verify={email:this.model.email,password:this.model.password}

    if(form.valid){
console.log(this.verify)
// form.reset()
let data={
  // "name": this.model.name,
  // "lname": this.model.lname,
  // "job": this.model.email,  
  // "number":this.model.number
  "email":this.model.email,
  "password":this.model.password
}
this.freeapiservice.login(data )
.subscribe(
  data=>{
    
this.login=data 
if(this.login.token){
  this.router.navigateByUrl('/dashboard');
  localStorage.setItem('loginmail',this.model.email)
  form.reset()
}else{
alert(this.login.error)
}
console.log(this.login)
  }
)


      // alert("submited successfully")
      
    }else{
      alert(
        "incorrect"
      )
    }
    // form.reset()
  }

  constructor(private freeapiservice: FreeapiService,private router: Router) {}


  ngOnInit(): void {
  }
  toggleShow() {
    this.showPassword = !this.showPassword;
    this.inputtype = this.showPassword ? 'text' : 'password';
  }

}
