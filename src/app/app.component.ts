import { Component } from '@angular/core';

import { IAppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private service: IAppService) {
  }

  getMode(): string {
      return this.service.GetMode();
  }
}
