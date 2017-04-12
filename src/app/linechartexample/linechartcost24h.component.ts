import {LineChartDemoComponent} from "./linechartexample.component";
import {Component, OnInit} from "@angular/core";
import {MeetwaardenService} from "../services/MeetwaardenService";

/**
 * Created by gjoosen on 11/04/2017.
 */
@Component({
  selector: 'line-chart-cost-24h',
  templateUrl: '../linechartexample/linechartexample.component.html',
  providers: [MeetwaardenService]
})

export class LineChartCost24hComponent extends LineChartDemoComponent implements OnInit{

  meetwaarden = [];

  date = new Date();
  hours = new Array<String>();

  ngOnInit() {
    for (let i = 24; i > 0; i--) {
      let hour = this.date.getHours() - i;
      if(hour < 0){
        hour = hour + 24;
      }
      this.hours.push(hour + ':00');
    }

    console.log("init last 24 hours cost");
    this.service.getLast24Hours().subscribe(result => {
      for(let x = 0; x < result.length; ++x){
        this.meetwaarden.push((result[x] / 1000) * 0.18);
      }
      this.lineChartData = [{data: this.meetwaarden, label: 'Cost in euro\'s  '}];
      this.lineChartData.slice();
    });

  }

  constructor(private service: MeetwaardenService){
    super();
  }

  public lineChartData: Array<any> = [
    {data: [24, 24, 50, 60, 45, 40], label: 'Cost in euro\'s'}];

  public lineChartLabels: Array<any> = this.hours;


}

