import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {
  startIndex=0;
  totalRec:any;
  record:any;
  constructor(private registerService: RegisterService) {
  }
  ngOnInit(){
    this.firstCall();
  }
  add() {
   //this.startIndex=0;
    this.record = this.registerService.register(this.startIndex);
    // this.totalRec=this.totalRec.concat( this.record)
    console.log(this.record);
  }
  onscroll(){
    this.startIndex +=10;
    this.add();
    console.log(this.startIndex);
  }
  firstCall(){
    this.record=this.registerService.register(this.startIndex);
    // this.totalRec=this.totalRec.concat( this.record)
    console.log(this.record);
  }
}