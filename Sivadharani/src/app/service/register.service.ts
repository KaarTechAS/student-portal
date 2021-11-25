import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  constructor(private http: HttpClient) { }
  register(index: number) {
    console.log("Success");
    return this.http.post('http://localhost:5000/student/getRec', {
      index
    });
}
}
