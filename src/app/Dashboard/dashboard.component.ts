import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {MeetwaardenService} from "../services/MeetwaardenService";

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MeetwaardenService]
})
export class DashboardPage implements OnInit{
  liveWatts = 0;

  constructor(private service: MeetwaardenService){ }

  ngOnInit() {
    Observable.interval(1000 * 5).subscribe(x => {
      this.service.getCurrentUsage().subscribe(result => {
        this.liveWatts = result;
      });
    });
  }

}
