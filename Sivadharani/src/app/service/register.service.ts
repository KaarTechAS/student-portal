import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  constructor(private http: HttpClient) { }
  register(index: number, nor: number) {
      try{
        return new Promise((resolve, reject) =>{
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
  }
}