import {LineChartDemoComponent} from "./linechartexample.component";
import {Component, OnInit} from "@angular/core";
import {MeetwaardenService} from "../services/MeetwaardenService";
import {Observable} from "rxjs";

/**
 * Created by gjoosen on 11/04/2017.
 */
@Component({
  selector: 'line-chart-24h',
  templateUrl: '../linechartexample/linechartexample.component.html',
  providers: [MeetwaardenService]
})

export class LineChart24hComponent extends LineChartDemoComponent implements OnInit{

  meetwaarden = [];

  constructor(private service:MeetwaardenService){
    super();
  }

  ngOnInit():void{
    console.log("init");
    this.service.getAllMeetwaarden().subscribe(result => {
      this.meetwaarden = result;
      this.lineChartData = [{data: this.meetwaarden, label: 'Series A'}];
      this.lineChartData.slice();
    });
  }

  public lineChartLabels:Array<any> = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9','10','11','12','13','14','15','16','17','18','18','20','21','22','23'];
  public lineChartData:Array<any> = [
    // {data: ,0,100], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    // {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
}
