import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contentSwitch = 1;
  showComponent(getal): void {
      this.contentSwitch = getal;
  }
}
