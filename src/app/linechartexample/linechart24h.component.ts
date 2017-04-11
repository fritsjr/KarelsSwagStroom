import {LineChartDemoComponent} from "./linechartexample.component";
import {Component} from "@angular/core";
import {MeetwaardenService} from "../services/MeetwaardenService";
/**
 * Created by gjoosen on 11/04/2017.
 */
@Component({
  selector: 'line-chart-24h',
  templateUrl: '../linechartexample/linechartexample.component.html',
  providers: [MeetwaardenService]
})

export class LineChart24hComponent extends LineChartDemoComponent{

  constructor(private service:MeetwaardenService){
    super();
  }

  public lineChartData:Array<any> = [
    {data: [20000, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    // {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];

}
