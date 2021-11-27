import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit{
  startIndex=0;
  endIndex=0;
  totalRec:any=[]
  record:any=[]
  pagedata:any;
  constructor(private _registerService: RegisterService) {
  }
  ngOnInit(){
    console.log("oninit")
    this.firstCall();
  }
  async add() {
    this.record = await this._registerService.register(this.startIndex, this.endIndex);
    this.totalRec=this.totalRec.concat( this.record)
    console.log(this.totalRec);
    this.record=[];
  }
  onscroll(){
    this.endIndex=10;
    this.startIndex +=10;
    this.add();
    console.log(this.startIndex);
  }
  async firstCall(){
    console.log("firstcall");
    this.endIndex=15;
    this.record=await this._registerService.register(this.startIndex, this.endIndex);
    this.totalRec=this.totalRec.concat( this.record)
    console.log(this.totalRec);
    this.record=[];
  }
}