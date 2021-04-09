import { Component, Input, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';
import { Structure } from 'src/app/models/structure.model';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent implements OnInit {
  constructor(private addservice: DataserviceService) { }
   x:any
addData:any;
  ngOnInit(): void {
    this.x= new Structure();
    this.addservice.getglobaldata().subscribe(res=>{
      this.addData=res;
      console.log(res);
      this.x.active=res['activeCases'];
      this.x.confirmed=res['totalCases'];
      this.x.recovered=res['recovered'];
      this.x.deaths=res['deaths'];
      this.x.activeNew=res['activeCasesNew'];
     this.x.deaths=res['deaths'];
    });
  }


}
