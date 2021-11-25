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
  endIndex=0;
  totalRec=[]
  record:any=[]
  pagedata:any;
  constructor(private registerService: RegisterService) {
  }
  ngOnInit(){
    this.firstCall();
  }
  add() {

    this.record = this.registerService.register(this.startIndex,this.endIndex);
    this.totalRec=this.totalRec.concat( this.record)
    console.log(this.totalRec);
    this.record=[];
  }
  onscroll(){
    this.endIndex=this.startIndex+10;
    this.startIndex +=10;
    this.add();
    console.log(this.startIndex);
  }
  firstCall(){
    this.endIndex=15;
    this.record=this.registerService.register(this.startIndex,this.endIndex);
    this.totalRec=this.totalRec.concat( this.record)
    console.log(this.totalRec);
    this.record=[];
  }
}