import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {

  index: number = 1 ;
  nor: number = 1 ;
  records: any;
  ngOnInit(): void {

  }
  constructor(private _registerService : RegisterService) {
    this._registerService.Behdata$.subscribe(data =>{
      console.log(data);
      this.records = data;
    })
   }

   behfun(){
    this._registerService.getBehData(this.index,this.nor);
    this.index += 1;
   }
  

}
