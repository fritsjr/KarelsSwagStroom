import {LineChartDemoComponent} from "./linechartexample.component";
import {Component, OnInit} from "@angular/core";
import {MeetwaardenService} from "../services/MeetwaardenService";
/**
 * Created by gjoosen on 11/04/2017.
 */
@Component({
  selector: 'line-chart-1-mnt',
  templateUrl: '../linechartexample/linechartexample.component.html',
  providers: [MeetwaardenService]
})

export class LineChart1mntComponent extends LineChartDemoComponent implements OnInit{

  date = new Date();
  days = new Array<Number>();

  meetwaarden = [];

  public lineChartData: Array<any> = [
    {data: [50, 100, 100, 100, 100, 50], label: 'Energy in kWh'}];
  // public lineChartLabels:Array<any> = ['5', '10', '15', '20', '25', '30'];

  ngOnInit() {
    for (let i = 31; i > 0; i--){
      let day = this.date.getDate() - i;
      if (day <= 0) {
        day = day + 31;
      }
      this.days.push(day);
    }

    console.log('init last month');
    this.service.getLastMonth().subscribe(result => {
      this.meetwaarden = result;
      this.lineChartData = [{data: this.meetwaarden, label: 'Series A'}];
      this.lineChartData.slice();
    });
  }
  public lineChartLabels: Array<any> = this.days;

  constructor(private service: MeetwaardenService){
    super();
  }

}
