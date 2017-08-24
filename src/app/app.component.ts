import { Component } from '@angular/core';

import { AppService } from './app.component.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private service: AppService) {
  }

  getMode(): string {
      return this.service.GetMode();
  }
}
