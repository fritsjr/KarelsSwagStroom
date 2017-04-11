import {LineChartDemoComponent} from "./linechartexample.component";
import {Component, OnInit} from "@angular/core";
/**
 * Created by gjoosen on 11/04/2017.
 */
@Component({
  selector: 'line-chart-24h',
  templateUrl: '../linechartexample/linechartexample.component.html'
})

export class LineChart24hComponent extends LineChartDemoComponent implements OnInit{


  date = new Date();
  date2 = new Date();
  hours = new Array<Number>();



  ngOnInit() {
    for (let i = 24; i > 0; i--) {
      let hour = this.date.getHours() - i;
      if(hour <= 0){
        hour = hour + 24;
      }
      this.hours.push(hour);
    }


    this.setDate();
  }

  public lineChartData:Array<any> = [
    {data: [60, 59, 80, 81, 56, 55, 40], label: 'Energy in kWh'}];



  public lineChartLabels:Array<any> = this.hours;

  public setDate() {
    this.date2.setHours(this.date.getHours() - 17);
  }


}

