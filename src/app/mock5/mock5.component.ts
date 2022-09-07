import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { FreeapiService } from '../service/freeapi.service';

@Component({
  selector: 'app-mock5',
  templateUrl: './mock5.component.html',
  styleUrls: ['./mock5.component.scss']
})
export class Mock5Component implements OnInit {
  showFiller = false;
  public questionList : any = [];
  public currentquestion :number =0;
  public points : number = 0;
  counter=60;
  correctAnswer: number= 0;
  incorrectAnswer: number= 0;
  interval$: any;
  progress: string='0'
  public food: string="0"
  constructor(private freeapiservice : FreeapiService) { }
  name = 'Angular';
  ngOnInit(): void {
    this.getAllquestion();
    this.startcounter();
  }
  getAllquestion(){
    this.freeapiservice.getquesionjson()
    .subscribe(res=>{
     this.questionList = res.questions
     console.log(res)
    })
    
}

nextquestion(){
  this.currentquestion++;
  }
  perviousquestion(){
  this.currentquestion--;
  }

  answer(currentQno:number,option:any){
    if(option.correct){
      this.points+=10;
      // this.points=this.points +10;
      this.getprogresspercent();
          this.correctAnswer++;
      // this.currentquestion++;
  
    }else{
  this.points-=10;
  this.getprogresspercent();
  // this.currentquestion++;
  this.incorrectAnswer++;
    }
  }

  startcounter(){
    this.interval$=interval(1000)
    .subscribe(()=>{
      this.counter--;
      if(this.counter===0){
        this.currentquestion++;
        this.counter=60;
        this.points-=10;
      }
      });
      setTimeout(() => {
        this.interval$.unsubscribe();
      }, 600000);
    }
    stopcounter(){
      this.interval$.unsubscribe();
      this.counter=0;
    }
    resetcounter()
    {
    this.stopcounter();
    this.counter=60
    this.startcounter();
    }

  getprogresspercent()
  {
    this.progress = ((this.currentquestion/this.questionList.length)*100).toString();
  return this.progress}
 



}
