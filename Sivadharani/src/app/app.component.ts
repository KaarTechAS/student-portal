import { Component } from '@angular/core';
import { Observable ,Subject, of} from 'rxjs';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Observables & Subjects';
  /*constructor(){
    var obs$: Observable<any> = of(1,2,3);
    obs$.subscribe(x => console.log("From app obs",x));

    var sub : Subject<any> = new Subject();
    sub.subscribe(x => console.log('From app sub',x))
    sub.next('go')
  }*/
  

fromsub: any;
  constructor(private _registerService : RegisterService){
    // this._registerService.sub.subscribe( x =>{
    //   console.log('From app sub',x)
    //   this.fromsub =x
    // });
  }

  
}
