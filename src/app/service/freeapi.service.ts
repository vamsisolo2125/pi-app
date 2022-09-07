import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FreeapiService {
   constructor(private httpclient: HttpClient) { }
   getquesionjson(){
     return this.httpclient.get<any>("assets/question.json")
   }
  getcomments(): Observable<any>{
             return this.httpclient.get("http://collegesuggest.piacademy.live/collegesuggest1/collegesuggest/api/college_list")
  }

 postdata(postingdata: any){
   return this.httpclient.post("https://reqres.in/api/users",postingdata)
 }

login(logindetail: any){
return this.httpclient.post("https://reqres.in/api/login",logindetail)
}
}

