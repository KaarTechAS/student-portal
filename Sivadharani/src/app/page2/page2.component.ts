import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  constructor(private _registerService: RegisterService) {
    //this._registerService.sub.subscribe(x => console.log('From page2 sub', x));
  }

emit(){
  this._registerService.sendData(Math.random());
}

  
  ngOnInit(): void {
    const studentInfo$ = new Observable(obs=>{
      console.log("start observable");
      obs.next('100');
      obs.next('200');
      setTimeout(()=>{
        obs.next('300')
      },1000);
      obs.next('400');
      obs.error('error occurs');
      obs.complete();
      console.log("end Observable");
      
    });
   const observer=studentInfo$.subscribe(sub =>{
      console.log(sub);
    },
    error=>{
      console.log(error);
    },
    ()=>{
      console.log("completed");
    });
    observer.unsubscribe();
  }
}
