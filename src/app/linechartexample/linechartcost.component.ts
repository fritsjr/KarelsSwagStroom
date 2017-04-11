import {LineChartDemoComponent} from "./linechartexample.component";
import {Component} from "@angular/core";

@Component({
  selector: 'line-chart-cost',
  templateUrl: '../linechartexample/linechartexample.component.html'
})

export class LineChartcostComponent extends LineChartDemoComponent{
  public lineChartData:Array<any> = [
    {data: [20, 30, 40, 30, 20, 30, 10], label: 'Kosten in euro'}];
  public lineChartLabels:Array<any> = ['5', '10', '15', '20', '25', '30'];

}
