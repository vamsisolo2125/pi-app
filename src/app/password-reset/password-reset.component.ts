import { Component, OnInit } from '@angular/core';
import { FreeapiService } from '../service/freeapi.service';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  inputtype: any='password'
  showPassword: boolean=false
  model:any={}
  login:any
  public verify!: object
  onsubmit(form:NgForm){
    this.verify={name:this.model.name,lname:this.model.lname,number:this.model.number,email:this.model.email,password:this.model.password}

    if(form.valid){
console.log(this.verify)
form.reset()
let data={
  "name": this.model.name,
  "lname": this.model.lname,
  "job": this.model.email,  
  "number":this.model.number
}
this.freeapiservice.postdata(data )
.subscribe(
  data=>{
this.login=data
console.log(this.login)
  }
)

      alert("submited successfully")
    }else{
      alert(
        "incorrect"
      )
    }
    // form.reset()
  }

  constructor(private freeapiservice: FreeapiService) {}


  ngOnInit(): void {
  }
  toggleShow() {
    this.showPassword = !this.showPassword;
    this.inputtype = this.showPassword ? 'text' : 'password';
  }
}



