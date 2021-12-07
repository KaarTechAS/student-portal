import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable()
export class RegisterService {
  name: any;
  sub : Subject<number>;
  

  private BehSub= new BehaviorSubject<any>([{
    "gender": "1", 
    "race": "1", 
    "loe": "1", 
    "lunch": "1", 
    "tpc": "1", 
    "maths": 69, 
    "rs": 90, 
    "ws": 88
  }]);
  Behdata$: Observable<any> = this.BehSub.asObservable()

  constructor(private http: HttpClient) {
    //this.sub = new Subject<number>();
  }
  
  
  getBehData(index: number, nor: number){
    this.http.post("/student/getRec",{index, nor})
    .subscribe(
      (data : any) => {
        console.log("data",data)
        this.BehSub.next(data);
      },
      (err : any) => console.log("Error"),
      () => console.log("completed")
      
    );
  }
  //subject
  sendData(data: number){
    this.sub.next(data);
  }
  /*constructor(private http: HttpClient) {}
  register(index: number, nor: number) {
      try{
        return new Promise((resolve, reject)=>{
          this.http.post("/student/getRec", {index, nor})
          .subscribe(
            res =>{
              return resolve(res)
            },
            err => {
              console.log(err);
              return reject(err);
            }
          );
        });
      } catch(err)
      {
        return Promise.reject();
      }
  }*/
}