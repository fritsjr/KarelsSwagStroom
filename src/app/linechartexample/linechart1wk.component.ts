import {LineChartDemoComponent} from "./linechartexample.component";
import {Component} from "@angular/core";

@Component({
  selector: 'line-chart-1-wk',
  templateUrl: '../linechartexample/linechartexample.component.html'
})

export class LineChart1wkComponent extends LineChartDemoComponent{
  public lineChartData:Array<any> = [
    {data: [300, 400, 350, 400, 450, 400, 500], label: 'Energy in kWh'}];

  public lineChartLabels:Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

}
