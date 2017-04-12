import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {MeetwaardenService} from "../services/MeetwaardenService";

@Component({
  selector: 'costs-page',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css'],
  providers: [MeetwaardenService]
})

export class CostsPage implements OnInit{
  liveWatts = null;
  liveEuros = 0;

  constructor(private service: MeetwaardenService) { }

  ngOnInit() {
    Observable.interval(1000 * 5).subscribe(x => {
      this.service.getCurrentUsage().subscribe(result => {
        this.liveWatts = result;
        this.liveEuros = (this.liveWatts / 1000) * 0.18;
      });
    });
  }
}
