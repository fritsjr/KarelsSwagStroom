import {LineChartDemoComponent} from "./linechartexample.component";
import {Component} from "@angular/core";
/**
 * Created by gjoosen on 11/04/2017.
 */
@Component({
  selector: 'line-chart-1-mnt',
  templateUrl: '../linechartexample/linechartexample.component.html'
})

export class LineChart1mntComponent extends LineChartDemoComponent{

  public lineChartData:Array<any> = [
    {data: [50, 100, 100, 100, 100, 50], label: 'Energy in kWh'}];
  public lineChartLabels:Array<any> = ['5', '10', '15', '20', '25', '30'];

}
