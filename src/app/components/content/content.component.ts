import { Component, Input, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';
import { Structure } from 'src/app/models/structure.model';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  getApi: any;
  cstructur: Structure;



  mydata: any[];
  myTitle: string = 'CovidChart';
  chartType: any = ChartType.GeoChart;

  chartColumns = ['Country', 'Active Cases'];
  chartOption = {
       // Africa
      colorAxis: {colors: ['#FF6347', 'black', '#FF6347']},
      backgroundColor: '#ffffff',
      datalessRegionColor: '#d3d3d3',
      defaultColor: '#FF6347',
    };
    
  chart: any;
  getCApi: any;
  filteredData: any;
  sorrtedArray: any;
  constructor(private service: DataserviceService) {
    this.mydata = [];
   }

  ngOnInit(): void {
    this.getglobaldata();
    this.cstructur = new Structure();
    this.getCoutrywiseData();
  }
  getglobaldata() {
    this.service.getglobaldata().subscribe(res => {
      this.getApi = res;
      // console.log(res);
      this.cstructur.active = res['activeCases'];
      this.cstructur.confirmed = res['totalCases'];
      this.cstructur.recovered = res['recovered'];
      this.cstructur.deaths = res['deaths'];
      this.cstructur.activeNew = res['activeCasesNew']
      this.cstructur.confirmedNew = res['activeCasesNew']
      this.cstructur.recoveredNew = res['recoveredNew']
      this.cstructur.deathsNew = res['deathsNew']







    });



  }




  getCoutrywiseData() {
    this.service.getCountrywiseData().subscribe((cData: any[]) => {
      this.getCApi = cData;
      this.filteredData = cData;
      // console.log(cdata);

      this.mydata.push(['Country','Active Cases']);
      cData.forEach(data => {
        this.mydata.push([data['country'],{v: data['infected'], f: `${data['infected']}`}]);
        

      });
      console.log(this.mydata);

      this.sorrtedArray = this.getCApi.sort((n1, n2) => n2['infected'] - n1['infected']);


    }
    );
  }



  filterData(dataa: string) {
    console.log(dataa);

    this.getCApi = [];

    for (let i = 0; i < this.filteredData.length; i++) {
      console.log(this.filteredData[i]['country'].toLowerCase().includes(dataa.toLowerCase()));

      if (this.filteredData[i]['country'].toLowerCase().includes(dataa.toLowerCase())) {
        this.getCApi.push(this.filteredData[i]);
      }
    }
  }







}
