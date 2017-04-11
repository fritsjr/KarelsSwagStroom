import {LineChartDemoComponent} from "./linechartexample.component";
import {Component, OnInit} from "@angular/core";
import {MeetwaardenService} from "../services/MeetwaardenService";

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

  date = new Date();
  hours = new Array<Number>();



  ngOnInit() {
    for (let i = 24; i > 0; i--) {
      let hour = this.date.getHours() - i;
      if(hour < 0){
        hour = hour + 24;
      }
      this.hours.push(hour);
    }

    console.log("init");
    this.service.getAllMeetwaarden().subscribe(result => {
      this.meetwaarden = result;
      this.lineChartData = [{data: this.meetwaarden, label: 'Series A'}];
      this.lineChartData.slice();
    });

  }

  constructor(private service: MeetwaardenService){
    super();
  }

  public lineChartData: Array<any> = [
    {data: [60, 59, 80, 81, 56, 55, 40], label: 'Energy in kWh'}];

  public lineChartLabels: Array<any> = this.hours;


}

