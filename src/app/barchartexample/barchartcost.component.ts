import {Component, OnInit} from '@angular/core';
import {MeetwaardenService} from '../services/MeetwaardenService';

/**
 * Created by fritsjr on 11/04/2017.
 */

@Component({
  selector: 'barchart-cost',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],
  providers: [MeetwaardenService]
})

export class BarChartCostComponent implements OnInit{
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  meetwaarden = [];

  date = new Date();
  dt = new Date();
  setdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  days = new Array<string>();

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 45], label: 'Cost in euro\'s'}
  ];

  public barChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,1)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  constructor(private service: MeetwaardenService){  }

  ngOnInit() {

    for (let i = 7; i > 0; i--) {
      let day = this.date.getDay() - (i + 1);
      if (day < 0) {
        day = day + 7;
      }

      this.days.push(this.setdays[day]);
    }

    console.log('init last week');
    this.service.getLastWeek().subscribe(result => {
      for(let x = 0; x < result.length; ++x){
        this.meetwaarden.push((result[x] / 1000) * 0.18);
      }
      this.barChartData = [{data: this.meetwaarden, label: 'Cost in euro\'s'}];
      this.barChartData.slice();
    });
  }

  public barChartLabels: string[] = this.days;

}
