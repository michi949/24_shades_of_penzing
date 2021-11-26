import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {TimeService} from "./services/time-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public constructor(private readonly library: FaIconLibrary,
                     private readonly timeService: TimeService) {
    library.addIconPacks(fas, fab);
    timeService.loadFromWorldTimeApi();
  }

}
