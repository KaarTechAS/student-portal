import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit{
  constructor(){}
  ngOnInit(): void{}
}
/*export class Page1Component implements OnInit{
  startIndex:any=0;
  endIndex:any=0;
  totalRec:any=[]
  record:any=[]
  pagedata:any;
  constructor(private _registerService: RegisterService) {
  }
  ngOnInit(){
    this.onscroll();
  }

  async add() {
    this.record = await this._registerService.register(this.startIndex, this.endIndex);
    this.totalRec=this.totalRec.concat( this.record)
    this.record=[];
  }
  onscroll(){
    this.endIndex=12;
    this.startIndex +=10;
    this.add();
  }
}*/